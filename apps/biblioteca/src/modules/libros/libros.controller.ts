import { Controller, Post, Get, Delete, Put, HttpCode, Param, Body, UseInterceptors } from '@nestjs/common';
import { LibrosRepository } from './libros.repository';
import { LibroDTO } from './libros.dto';
import { FormattingInterceptor } from '../../../../../libs/utils/interceptors/response.interceptor';

@Controller('libros')
@UseInterceptors(FormattingInterceptor)
export class LibrosController {
    constructor(private libroRepository: LibrosRepository) { }

    @Post('create')
    @HttpCode(201)
    async create(@Body() item: any): Promise<LibroDTO> {
        return this.libroRepository.create(item);
    }

    @Get('get')
    async findAll(): Promise<LibroDTO[]> {
        return this.libroRepository.findAll();
    }

    @Get('find/:id')
    async findOne(@Param('id') id: string): Promise<LibroDTO | null> {
        return this.libroRepository.findOne(id);
    }

    @Delete('drop/:id')
    @HttpCode(200)
    async drop(@Param('id') id: string): Promise<void> {
        await this.libroRepository.drop(id);
    }

    @Put('update/:id')
    @HttpCode(201)
    async update(@Param('id') id: string, @Body() updateData: any): Promise<LibroDTO | null> {
        return this.libroRepository.update(id, updateData);
    }

    @Get(':isbn')
    async findByIsbn(@Param('isbn') isbn: number): Promise<LibroDTO | null> {
        return this.libroRepository.findByIsbn(isbn);
    }
}