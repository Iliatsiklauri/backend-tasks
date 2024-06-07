import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { UserDTO } from './expenses.dto';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Get()
  Gethello(@Query() param) {
    console.log(param);
    return this.expensesService.getFull();
  }

  @Get('/:id')
  GetById(@Param() params) {
    return this.expensesService.getById(Number(params.id));
  }

  @Post()
  AddExpense(@Body() body: UserDTO) {
    return this.expensesService.AddExpense(body);
  }

  @Delete('/:id')
  deleteExpense(@Param('id', ParseIntPipe) id) {
    return this.expensesService.deleteExpense(id);
  }

  @Patch('/:id')
  editExpense(@Param('id', ParseIntPipe) id, @Body() body: UserDTO) {
    return this.expensesService.editExpense(id, body);
  }
}
