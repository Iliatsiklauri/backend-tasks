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
      category: 'zmanebi',
      cost: 50,
    },
    {
      id: 4,
      name: 'little davit',
      category: 'funikuliori date',
      cost: 120,
    },
  ];
  getFull() {
    return this.expenses;
  }
}
