import { IsString, IsNumber, IsEnum, IsOptional, IsDateString } from 'class-validator';

export class AutorDTO {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsNumber()
  writtenBooks: number;

  @IsDateString()
  @IsOptional()
  deletedAt?: Date;
}
