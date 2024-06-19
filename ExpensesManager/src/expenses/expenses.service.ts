import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './entities/expense.entity';
import { Model } from 'mongoose';
import { queryParams } from './dto/filter-expense.dto';

@Injectable()
export class ExpensesService implements OnModuleInit {
  constructor(
    @InjectModel(Expense.name) private ExpenseModel: Model<Expense>,
  ) {}

  onModuleInit() {}

  create(createExpenseDto: CreateExpenseDto) {
    return null;
  }

  findAll(query: queryParams) {
    const page = query.page || 1;
    const perPage = query.perPage || 20;
    return this.ExpenseModel.find()
      .skip((page - 1) * perPage)
      .limit(perPage);
  }

  findOne(id: string) {
    return this.ExpenseModel.findById(id);
  }

  update(id: string, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: string) {
    return this.ExpenseModel.findByIdAndDelete(id);
  }
}
