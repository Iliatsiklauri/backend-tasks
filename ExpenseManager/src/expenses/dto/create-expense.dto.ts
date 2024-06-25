import { IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto extends Document {
  @IsString()
  name: string;
  @IsString()
  category: string;
  @IsNumber()
  cost: number;
}
