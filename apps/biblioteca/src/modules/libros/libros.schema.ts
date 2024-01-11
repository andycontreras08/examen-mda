import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export enum LibroStatus {
    DISPONIBLE = 'DISPONIBLE',
    PRESTAMO = 'EN PRESTAMO',
    DEVUELTO = 'DEVUELTO',
    PERDIDO = 'PERDIDO',
    RETRASADO = 'RETRASADO'
}

@Schema({timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    currentTime: () => Date.now()
}})
export class Libros extends Document {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    synopsis: string;
    
    @Prop({ required: true })
    isbn: number;

    @Prop({ required: true })
    pages: number;

    @Prop({ required: true })
    editorial: string;

    @Prop({ default: LibroStatus.DISPONIBLE })
    status: LibroStatus;

    @Prop({ default: null, type: Date })
    deletedAt: Date;
}

export const LibroSchema = SchemaFactory.createForClass(Libros);

LibroSchema.path('deletedAt').get(function (v) {
    return v ? v.getTime() : null;
});

LibroSchema.set('timestamps', { createdAt: 'createdAt', updatedAt: 'updatedAt' });