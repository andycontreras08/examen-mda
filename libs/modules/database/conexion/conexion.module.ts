import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://andycontreras:hayhainformatic08@andresmda.76fnytr.mongodb.net/biblioteca?retryWrites=true&w=majority'
        )
    ],
    exports: [MongooseModule]
})
export class ConexionModule {}