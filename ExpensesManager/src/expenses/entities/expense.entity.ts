import { NestFactory } from '@nestjs/core';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Expense {
  @Prop()
  name: string;
  @Prop()
  category: string;
  @Prop()
  cost: number;
}
export const ExpenseSchema = SchemaFactory.createForClass(Expense);
