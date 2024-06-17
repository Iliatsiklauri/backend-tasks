import { IsMongoId } from 'class-validator';

export class expenseIDValidation {
  @IsMongoId()
  id: string;
}
