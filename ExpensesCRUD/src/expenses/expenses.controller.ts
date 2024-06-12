import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  getAll() {
    return this.expensesService.getAll();
  }
  @Get(':id')
  getById() {
    return 'user by id';
  }
  @Post()
  create() {
    return 'createdd';
  }
}
