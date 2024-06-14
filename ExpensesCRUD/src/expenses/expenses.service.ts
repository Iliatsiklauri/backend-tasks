import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createDTO } from './dto/create.DTO';
import { expenses } from './interface/expenses';
import { UpdateExpense } from './dto/update.DTO';

@Injectable()
export class ExpensesService {
  private expenses = [
    {
      id: 0,
      name: 'bmw',
      category: 'car',
      cost: 2000,
      createdAt: '12/06/2024',
    },
    {
      id: 1,
      name: 'radison',
      category: 'hotel',
      cost: 1200,
      createdAt: '13/06/2024',
    },
    {
      id: 2,
      name: 'hotdog',
      category: 'food',
      cost: 15,
      createdAt: '14/06/2024',
    },
    {
      id: 3,
      name: 'mercedes',
      category: 'car',
      cost: 4000,
      createdAt: '15/06/2024',
    },
  ];

  findIndex(id: number) {
    let index = this.expenses.findIndex((el) => el.id === id);
    if (index === -1)
      throw new HttpException(
        'there is no expense available with this id',
        HttpStatus.BAD_REQUEST,
      );
    return index;
  }
  getAll(): expenses[] {
    return this.expenses;
  }
  getById(id: number) {
    let index = this.findIndex(id);
    return this.expenses[index];
  }
  createExpense(expense: createDTO) {
    if (!expense.category || !expense.cost || !expense.name)
      throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
    this.expenses.push({
      id: this.expenses[this.expenses.length - 1]?.id + 1 || 0,
      ...expense,
      createdAt: new Date().toISOString(),
    });
    return this.expenses;
  }
  deleteExpense(id: number) {
    const index = this.findIndex(id);
    this.expenses.splice(index, 1);
    return { success: true };
  }
  updateExpense(id: number, expense: UpdateExpense) {
    let index = this.findIndex(id);
    this.expenses[index] = {
      ...this.expenses[index],
      ...expense,
    };
    return this.expenses[index];
  }
}
