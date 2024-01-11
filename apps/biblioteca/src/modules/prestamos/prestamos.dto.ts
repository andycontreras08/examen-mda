import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class PrestamoDTO {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsNumber()
  phone: number;

  @IsString()
  mail: string;

  @IsString()
  borrowedBook: number;

  @IsDateString()
  @IsOptional()
  deletedAt?: Date;
}

