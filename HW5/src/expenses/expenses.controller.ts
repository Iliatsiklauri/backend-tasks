import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesDTO, updateExpense } from './expenses.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Get()
  getAll() {
    return this.expensesService.getAllExpenses();
  }

  @Post()
  createExpense(@Body() expense: ExpensesDTO) {
    return this.expensesService.createExpense(expense);
  }
  @Put()
  updateExpense(@Body() expense: updateExpense) {
    return this.expensesService.updateExpense(expense);
  }

  @Delete(':id')
  deleteExpense(@Param('id') index) {
    return this.expensesService.deleteExpense(Number(index));
  }
}
