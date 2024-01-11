import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        currentTime: () => Date.now()
    }})
export class Prestamo extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    lastname: string;

    @Prop({ required: true })
    phone: number;

    @Prop({ required: true })
    mail: string;

    @Prop({ default: null })
    borrowedBook: number;

    @Prop({ default: null, type: Date })
    deletedAt: Date;
}

export const PrestamoSchema = SchemaFactory.createForClass(Prestamo);

PrestamoSchema.path('deletedAt').get(function (v) {
    return v ? v.getTime() : null;
});

PrestamoSchema.set('timestamps', { createdAt: 'createdAt', updatedAt: 'updatedAt' });