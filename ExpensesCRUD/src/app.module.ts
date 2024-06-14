import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { LoggerMiddleware } from './expenses/expenses.middleware';

@Module({
  imports: [ExpensesModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
