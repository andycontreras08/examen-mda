import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Prestamo , PrestamoSchema } from './prestamos.schema';
import { PrestamosRepository } from './prestamos.repository';
import { PrestamosController } from './prestamos.controller';
import { FormattingInterceptor } from '../../../../../libs/utils/interceptors/response.interceptor';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Prestamo.name,
            schema: PrestamoSchema,
        }])
    ],
    controllers: [PrestamosController],
    providers: [PrestamosRepository,
        {
            provide: 'FormattingInterceptor',
            useClass: FormattingInterceptor,
        }],
    exports: ['FormattingInterceptor'],
})
export class PrestamosModule {}
