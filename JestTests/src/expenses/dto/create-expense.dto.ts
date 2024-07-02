import { IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  name: string;
  @IsString()
  category: string;
  @IsNumber()
  cost: number;
}
