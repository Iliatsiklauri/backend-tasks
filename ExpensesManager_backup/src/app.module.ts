import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

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
