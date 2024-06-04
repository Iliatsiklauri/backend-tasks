import { Injectable } from '@nestjs/common';
import { ExpenseIntf, UserDTO } from './expenses.interface';

@Injectable()
export class ExpensesService {
  private expenses = [
    {
      id: 0,
      category: 'shopping',
      cost: 200,
    },
    {
      id: 1,
      category: 'food',
      cost: 14,
    },
    {
      id: 2,
      category: 'fixing car',
      cost: 500,
    },
    {
      id: 3,
      category: 'zmanebi',
      cost: 50,
    },
    {
      id: 4,
      category: 'funikuliori date',
      cost: 120,
    },
  ];
  getFull(): ExpenseIntf[] {
    return this.expenses;
  }

  AddExpense(body: UserDTO) {
    const obj = {
      id: this.expenses[this.expenses.length - 1]?.id + 1 || 0,
      ...body,
    };
    this.expenses.push(obj);
    return {
      success: true,
    };
  }

  getById(id) {
    const obj = this.expenses.find((el) => el.id === Number(id));
    if (!obj) {
      return 'no object with this id ';
    }
    return obj;
  }
  deleteExpense(id) {
    const newArr = this.expenses.filter((el) => el.id !== Number(id));
    this.expenses = newArr;
  }
  editExoense(id) {
    const obj = this.expenses.find((el) => el.id === Number(id));
  }
}
