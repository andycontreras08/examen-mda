import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    currentTime: () => Date.now()
}})
export class Autor extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    lastname: string;
    
    @Prop({ required: true })
    writtenBooks: number;

    @Prop({ default: null, type: Date })
    deletedAt: Date;
}

export const AutorSchema = SchemaFactory.createForClass(Autor);

AutorSchema.path('deletedAt').get(function (v) {
    return v ? v.getTime() : null;
});

AutorSchema.set('timestamps', { createdAt: 'createdAt', updatedAt: 'updatedAt' });