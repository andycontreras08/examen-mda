import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Autor, AutorSchema } from './autores.schema';
import { AutoresRepository } from './autores.repository';
import { AutoresController } from './autores.controller';
import { FormattingInterceptor } from '../../../../../libs/utils/interceptors/response.interceptor';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Autor.name,
            schema: AutorSchema,
        }])
    ],
    controllers: [AutoresController],
    providers: [AutoresRepository,
        {
            provide: 'FormattingInterceptor',
            useClass: FormattingInterceptor,
        }],
    exports: ['FormattingInterceptor'],
})
export class AutoresModule { }
