import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpensesService {
  private expenses = [
    {
      id: 0,
      cost: 400,
      category: 'bank',
      createdAt: '13/05/2024',
    },
    {
      id: 1,
      cost: 20,
      category: 'food',
      createdAt: '23/05/2024',
    },
    {
      id: 2,
      cost: 13,
      category: 'drinks',
      createdAt: '30/05/2024',
    },
  ];
  getAll() {
    return this.expenses;
  }
}
