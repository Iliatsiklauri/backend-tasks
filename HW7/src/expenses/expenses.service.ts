import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExpenseIntf } from './expenses.interface';
import { UserDTO } from './expenses.dto';

@Injectable()
export class ExpensesService {
  private expenses: ExpenseIntf[] = [
    {
      id: 0,
      name: 'gela',
      category: 'shopping',
      cost: 200,
      createdAt: 'gushin win',
    },
    {
      id: 1,
      name: 'koba',
      category: 'food',
      cost: 14,
      createdAt: 'gushin win',
    },
    {
      id: 2,
      name: 'kaxa',
      category: 'fixing car',
      cost: 500,
      createdAt: 'imdghes',
    },
    {
      id: 3,
      name: 'giusha',
      category: 'zmanebi',
      cost: 50,
      createdAt: 'gushin',
    },
    {
      id: 4,
      name: 'liza',
      category: 'funikuliori date',
      cost: 120,
      createdAt: 'gushin win',
    },
  ];
  getFull(): ExpenseIntf[] {
    return this.expenses;
  }

  AddExpense(body: UserDTO): ExpenseIntf {
    if (!body.category || !body.cost || !body.name) {
      throw new HttpException(
        'cost , name and category are required !',
        HttpStatus.BAD_REQUEST,
      );
    }
    const obj = {
      id: this.expenses[this.expenses.length - 1]?.id + 1 || 0,
      createdAt: new Date().toISOString(),
      ...body,
    };
    this.expenses.push(obj);
    return obj;
  }

  getById(id): ExpenseIntf | string {
    const obj = this.expenses.find((el) => el.id === Number(id));
    if (!obj) {
      throw new HttpException(
        'No expense with this id ',
        HttpStatus.BAD_REQUEST,
      );
    }
    return obj;
  }

  deleteExpense(id: number) {
    const newArr = this.expenses.filter((el) => el.id !== id);
    this.expenses = newArr;
  }

  editExpense(id: number, body: UserDTO) {
    if (!body.category || !body.cost || !body.name) {
      throw new HttpException(
        'cost , name and category are required !',
        HttpStatus.BAD_REQUEST,
      );
    }
    let index = this.expenses.findIndex((el) => el.id === id);
    const target = this.expenses.find((el) => el.id === id);

    const obj = {
      ...target,
      category: body.category,
      cost: body.cost,
      name: body.name,
    };
    this.expenses[index] = obj;

    return obj;
  }
}
