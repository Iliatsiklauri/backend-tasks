import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  providers: [ExpensesService],
  controllers: [ExpensesController],
})
export class ExpensesModule {}
