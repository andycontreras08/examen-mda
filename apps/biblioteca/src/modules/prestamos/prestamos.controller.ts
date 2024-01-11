import { Controller, Post, Get, Delete, Put, HttpCode, Param, Body, UseInterceptors } from '@nestjs/common';
import { PrestamosRepository } from './prestamos.repository';
import { PrestamoDTO } from './prestamos.dto';
import { FormattingInterceptor } from '../../../../../libs/utils/interceptors/response.interceptor';

@Controller('prestamos')
@UseInterceptors(FormattingInterceptor)
export class PrestamosController {
    constructor(private prestamoRepository: PrestamosRepository) { }

    @Post('create')
    @HttpCode(201)
    async create(@Body() item: any): Promise<PrestamoDTO> {
        return this.prestamoRepository.create(item);
    }

    @Get('get')
    async findAll(): Promise<PrestamoDTO[]> {
        return this.prestamoRepository.findAll();
    }

    @Get('find/:id')
    async findOne(@Param('id') id: string): Promise<PrestamoDTO | null> {
        return this.prestamoRepository.findOne(id);
    }

    @Delete('drop/:id')
    @HttpCode(200)
    async drop(@Param('id') id: string): Promise<void> {
        await this.prestamoRepository.drop(id);
    }

    @Put('update/:id')
    @HttpCode(201)
    async update(@Param('id') id: string, @Body() updateData: any): Promise<PrestamoDTO | null> {
        return this.prestamoRepository.update(id, updateData);
    }

    @Get('borrowed-books/:name')
    async findAmountBorrowedBooks(@Param('name') name: string): Promise<number | null> {
        try {
            const borrowedBooksCount = await this.prestamoRepository.findAmountBorrowedBooks(name);
            return borrowedBooksCount;
        } catch (error) {
            return null;
        }
    }
}