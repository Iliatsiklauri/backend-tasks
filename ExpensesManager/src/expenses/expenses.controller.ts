import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { expenseIDValidation } from './dto/expense-id.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.create(createExpenseDto);
  }

  @Get()
  findAll() {
    return this.expensesService.findAll();
  }

  @Get(':id')
  findOne(@Param() Param: expenseIDValidation) {
    return this.expensesService.findOne(Param.id);
  }

  @Patch(':id')
  update(
    @Param() Param: expenseIDValidation,
    @Body() updateExpenseDto: UpdateExpenseDto,
  ) {
    return this.expensesService.update(Param.id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param() Param: expenseIDValidation) {
    return this.expensesService.remove(Param.id);
  }
}
