import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"; // Añadir esta importación
import { Model } from "mongoose";
import { Prestamo } from "./prestamos.schema";
import { GenericRepository } from "../../../../../libs/modules/database/general.repository";

@Injectable()
export class PrestamosRepository extends GenericRepository<Prestamo> {
    constructor(@InjectModel(Prestamo.name) private prestamoModel: Model<Prestamo>) {
        super(prestamoModel);
    }

    async findAmountBorrowedBooks(name: string): Promise<number | null> {
        const borrowedBooks = await this.model.findOne({ name, borrowedBook: { $ne: null } });
        return borrowedBooks?.borrowedBook ?? null;
    }
}