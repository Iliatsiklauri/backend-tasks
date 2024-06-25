import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Expense {
  @Prop()
  name: string;
  @Prop()
  category: string;
  @Prop()
  cost: number;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
