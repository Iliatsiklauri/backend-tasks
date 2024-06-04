import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpensesService {
  private expenses = [
    {
      id: 0,
      name: 'ilia',
      category: 'shopping',
      cost: 200,
    },
    {
      id: 1,
      name: 'daviti',
      category: 'food',
      cost: 14,
    },
    {
      id: 2,
      name: 'giorgi',
      category: 'fixing car',
      cost: 500,
    },
    {
      id: 3,
      name: 'saba',
      category: 'date',
      cost: 50,
    },
  ];
  getHello() {
    return this.expenses;
  }
}
