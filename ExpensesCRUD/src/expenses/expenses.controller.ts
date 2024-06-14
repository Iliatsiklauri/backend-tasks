import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { createDTO } from './dto/create.DTO';
import { expenses } from './interface/expenses';
import { UpdateExpense } from './dto/update.DTO';
import { isAdmin, testKey } from './expenses.guard';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}
  @UseGuards(testKey)
  @Get()
  getAll(): expenses[] {
    return this.expensesService.getAll();
  }
  @UseGuards(testKey)
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id) {
    return this.expensesService.getById(id);
  }
  @UseGuards(isAdmin)
  @Post()
  addExpense(@Body() body: createDTO) {
    return this.expensesService.createExpense(body);
  }

  @UseGuards(isAdmin)
  @Delete(':id')
  deleteExpense(@Param('id', ParseIntPipe) id) {
    return this.expensesService.deleteExpense(id);
  }
  @UseGuards(isAdmin)
  @Patch(':id')
  updateExpense(@Param('id', ParseIntPipe) id, @Body() expense: UpdateExpense) {
    return this.expensesService.updateExpense(id, expense);
  }
}
