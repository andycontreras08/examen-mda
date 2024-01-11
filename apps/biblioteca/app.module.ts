import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LibrosModule } from './src/modules/libros/libros.module';
import { AutoresModule } from './src/modules/autores/autores.module';
import { PrestamosModule } from './src/modules/prestamos/prestamos.module';
import { ConexionModule } from 'libs/modules/database/conexion/conexion.module';

@Module({
  imports: [ConexionModule, LibrosModule, AutoresModule, PrestamosModule],
  controllers: [AppController]
})
export class AppModule {}
