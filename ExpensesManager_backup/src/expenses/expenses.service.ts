import {
  HttpException,
  HttpStatus,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './Schema/expense.schema';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';

@Injectable()
export class ExpensesService implements OnModuleInit {
  constructor(
    @InjectModel(Expense.name) private ExpensesModel: Model<Expense>,
  ) {}
  async onModuleInit() {
    const count = await this.ExpensesModel.countDocuments();
    const arrayToolInsert = [];
    if (count === 0) {
      for (let i = 0; i < 10_000; i++) {
        const user = {
          name: faker.commerce.product(),
          category: faker.commerce.productMaterial(),
          cost: faker.commerce.price({ min: 100, max: 40000 }),
        };
        arrayToolInsert.push(user);
      }
      await this.ExpensesModel.insertMany(arrayToolInsert);
    }
  }

  async create(createExpenseDto: CreateExpenseDto) {
    try {
      const Expense = await this.ExpensesModel.create(createExpenseDto);
      await Expense.save();
      return Expense;
    } catch (er) {
      throw new HttpException('Bad request my friend', HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    return this.ExpensesModel.find();
  }

  async findOne(id: string) {
    const user = await this.ExpensesModel.findById(id);
    if (!user)
      throw new HttpException(
        'there is no user with this id',
        HttpStatus.BAD_REQUEST,
      );
    return user;
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    const updatedExpense = await this.ExpensesModel.findByIdAndUpdate(
      id,
      {
        ...updateExpenseDto,
        $inc: { __v: 1 },
      },
      { new: true },
    );
    return updatedExpense;
  }

  async remove(id: string) {
    const removedExpense = await this.ExpensesModel.findByIdAndDelete(id);
    if (!removedExpense)
      throw new HttpException(
        'there is no user with this id',
        HttpStatus.BAD_REQUEST,
      );
    return removedExpense;
  }
}
