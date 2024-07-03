import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { currentUser } from 'src/users/dto/current-user.dto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expense.name) private ExpenseModel: Model<Expense>,
  ) {}
  create(createExpenseDto: CreateExpenseDto, currentUser: currentUser) {
    const obj = {
      ...createExpenseDto,
      userId: currentUser.id,
    };
    return this.ExpenseModel.create(obj);
  }

  findAll() {
    return this.ExpenseModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
