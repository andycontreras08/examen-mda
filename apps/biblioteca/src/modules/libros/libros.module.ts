import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Libros , LibroSchema } from './libros.schema';
import { LibrosRepository } from './libros.repository';
import { LibrosController } from './libros.controller';
import { FormattingInterceptor } from '../../../../../libs/utils/interceptors/response.interceptor';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Libros.name,
            schema: LibroSchema,
        }])
    ],
    controllers: [LibrosController],
    providers: [LibrosRepository,
        {
            provide: 'FormattingInterceptor',
            useClass: FormattingInterceptor,
        }],
    exports: ['FormattingInterceptor'],
})
export class LibrosModule {}
