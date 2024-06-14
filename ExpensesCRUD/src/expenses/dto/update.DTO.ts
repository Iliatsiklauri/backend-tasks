import { PartialType } from '@nestjs/mapped-types';
import { createDTO } from './create.DTO';

export class UpdateExpense extends PartialType(createDTO) {}
