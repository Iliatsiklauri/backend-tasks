import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ExpensesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
