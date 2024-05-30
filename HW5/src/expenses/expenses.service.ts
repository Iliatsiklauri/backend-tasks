import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IExpenses } from './expenses.interface';
import { ExpensesDTO, updateExpense } from './expenses.dto';
import { findIndex } from 'rxjs';

@Injectable()
export class ExpensesService {
  private expenses: IExpenses[] = [
    {
      id: 0,
      category: 'shopping',
      price: 400,
      createdAt: '10:37:40T05:30:2024Z',
    },
    {
      id: 1,
      category: 'movie',
      price: 100,
      createdAt: '10:45:40T05:30:2024Z',
    },
    {
      id: 2,
      category: 'food',
      price: 30,
      createdAt: '10:59:40T05:30:2024Z',
    },
  ];
  getAllExpenses(): IExpenses[] {
    return this.expenses;
  }
  createExpense(expense: ExpensesDTO): IExpenses {
    if (!expense.price || !expense.category!)
      throw new HttpException(
        'Category and Cost is required',
        HttpStatus.BAD_REQUEST,
      );
    const id = this.expenses[this.expenses.length - 1]?.id + 1 || 0;
    const newExpense = {
      id,
      createdAt: new Date().toISOString(),
      ...expense,
    };
    this.expenses.push(newExpense);
    return newExpense;
  }

  updateExpense(expense: updateExpense): IExpenses | string {
    if ((!expense.category && !expense.price) || !expense.id)
      throw new HttpException(
        'category or price and id is required',
        HttpStatus.BAD_REQUEST,
      );
    const target = this.expenses.find((el) => el.id === expense.id);
    const index = this.expenses.findIndex((el) => el.id === expense.id);
    if (target) {
      const NewObj = {
        ...target,
        category: expense.category ? expense.category : 'gelamgela',
        price: expense.price ? expense.price : target.price,
        editedAt: new Date().toISOString(),
      };
      this.expenses[index] = NewObj;
      return NewObj;
    }
    return 'There is No expense with this id';
  }

  deleteExpense(index: number) {
    if (!this.expenses[index]) {
      return new HttpException(
        'There is no expense on this index',
        HttpStatus.BAD_REQUEST,
      );
    }
    this.expenses.splice(index, 1);
    return this.expenses;
  }
}
