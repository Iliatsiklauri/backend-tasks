import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './entities/expense.entity';
import { Model, isValidObjectId } from 'mongoose';
import { ExpensesModule } from './expenses.module';

@Injectable()
export class ExpensesService implements OnModuleInit {
  constructor(
    @InjectModel(Expense.name) private ExpenseModel: Model<Expense>,
  ) {}
  onModuleInit() {}

  create(createExpenseDto: CreateExpenseDto) {
    if (
      !createExpenseDto.name ||
      !createExpenseDto.category ||
      !createExpenseDto.cost
    ) {
      throw new BadRequestException('incomplete expense');
    }
    return this.ExpenseModel.create(createExpenseDto);
  }
  findAll() {
    return this.ExpenseModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('id is not valid');
    const expense = await this.ExpenseModel.findById(id);
    if (!expense)
      throw new BadRequestException('there is no expense with this id');
    return expense;
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    if (!isValidObjectId(id)) throw new BadRequestException('id is not valid');

    const expense = await this.ExpenseModel.findById(id);
    if (!expense) throw new BadRequestException('expense not found');

    const updatedExpense = await this.ExpenseModel.findByIdAndUpdate(
      id,
      updateExpenseDto,
    );
    return updatedExpense;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('id is not valid');
    const expense = await this.ExpenseModel.findById(id);
    if (!expense) throw new BadRequestException('expense not found');
    return await this.ExpenseModel.findByIdAndDelete(id);
  }
}
