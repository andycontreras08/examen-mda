import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"; // Añadir esta importación
import { Model } from "mongoose";
import { Autor } from "./autores.schema";
import { GenericRepository } from "../../../../../libs/modules/database/general.repository";

@Injectable()
export class AutoresRepository extends GenericRepository<Autor> {
    constructor(@InjectModel(Autor.name) private autorModel: Model<Autor>) {
        super(autorModel);
    }

    async findAmountWrittenBooks(name: string): Promise<number | null> {
        const autor = await this.model.findOne({ name }).select('writtenBooks').exec();
        if (autor) {
            return autor.writtenBooks;
        } else {
            throw new Error(`No se encontró un autor con el nombre ${name}`);
        }
    }
}