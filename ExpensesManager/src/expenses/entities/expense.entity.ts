import { NestFactory } from '@nestjs/core';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Expense {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  category: string;
  @Prop({ required: true, index: true })
  cost: number;
}
export const ExpenseSchema = SchemaFactory.createForClass(Expense);
