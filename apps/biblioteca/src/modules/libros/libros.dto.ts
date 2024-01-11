import { IsString, IsNumber, IsEnum, IsOptional, IsDateString } from 'class-validator';
import { LibroStatus } from './libros.schema';

export class LibroDTO {
  @IsString()
  title: string;

  @IsString()
  synopsis: string;

  @IsNumber()
  isbn: number;

  @IsNumber()
  pages: number;

  @IsString()
  editorial: string;

  @IsEnum(LibroStatus)
  @IsOptional()
  status?: LibroStatus;

  @IsDateString()
  @IsOptional()
  deletedAt?: Date;
}
