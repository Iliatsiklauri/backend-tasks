import { Controller, Get } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}
  @Get()
  Gethello() {
    return this.expensesService.getFull();
  }
}
