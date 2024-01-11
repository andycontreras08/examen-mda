import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Libros } from "./libros.schema";
import { GenericRepository } from "../../../../../libs/modules/database/general.repository";

@Injectable()
export class LibrosRepository extends GenericRepository<Libros> {
    constructor(@InjectModel(Libros.name) private libroModel: Model<Libros>) {
        super(libroModel);
    }

    async findByIsbn(isbn: number): Promise<Libros | null> {
        const foundItem = await this.model.findOne({ isbn }).exec();
        if (!foundItem) {
            throw new Error(`No se encontró un elemento con el ISBN ${isbn}`);
        }
        return foundItem;
    }
}
