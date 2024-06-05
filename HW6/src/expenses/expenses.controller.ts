import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { UserDTO } from './expenses.interface';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}
  @Get()
  Gethello() {
    return this.expensesService.getFull();
  }
  @Get('/:id')
  GetById(@Param() params) {
    return this.expensesService.getById(params.id);
  }
  @Post()
  AddExpense(@Body() body: UserDTO) {
    return this.expensesService.AddExpense(body);
  }

  @Delete('/:id')
  deleteExpense(@Param() params) {
    return this.expensesService.deleteExpense(params.id);
  }
  @Patch('/:id')
  editExpense(@Param() params, @Body() body: UserDTO) {
    return this.expensesService.editExoense(params.id, body);
  }
}
