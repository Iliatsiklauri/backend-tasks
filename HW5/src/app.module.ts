import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [ExpensesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
