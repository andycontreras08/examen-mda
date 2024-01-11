import { Controller, Post, Get, Delete, Put, HttpCode, Param, Body, UseInterceptors } from '@nestjs/common';
import { AutoresRepository } from './autores.repository';
import { AutorDTO } from './autores.dto';
import { FormattingInterceptor } from '../../../../../libs/utils/interceptors/response.interceptor';

@Controller('autores')
@UseInterceptors(FormattingInterceptor)
export class AutoresController {
    constructor(private autorRepository: AutoresRepository) { }

    @Post('create')
    @HttpCode(201)
    async create(@Body() item: any): Promise<AutorDTO> {
        return this.autorRepository.create(item);
    }

    @Get('get')
    async findAll(): Promise<AutorDTO[]> {
        return this.autorRepository.findAll();
    }

    @Get('find/:id')
    async findOne(@Param('id') id: string): Promise<AutorDTO | null> {
        return this.autorRepository.findOne(id);
    }

    @Delete('drop/:id')
    @HttpCode(200)
    async drop(@Param('id') id: string): Promise<void> {
        await this.autorRepository.drop(id);
    }

    @Put('update/:id')
    @HttpCode(201)
    async update(@Param('id') id: string, @Body() updateData: any): Promise<AutorDTO | null> {
        return this.autorRepository.update(id, updateData);
    }

    @Get(':name/writtenBooks')
    async getAmountWrittenBooks(@Param('name') name: string): Promise<{ writtenBooks: number }> {
        try {
            const writtenBooks = await this.autorRepository.findAmountWrittenBooks(name);
            return { writtenBooks };
        } catch (error) {
            return null;
        }
    }
}