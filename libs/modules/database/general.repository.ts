import { Injectable } from "@nestjs/common";
import { Model, Document } from "mongoose";
import { DateTime } from 'luxon';

@Injectable()
export class GenericRepository<T extends Document> {
  constructor(protected readonly model: Model<T>) { }

  async create(item: any): Promise<T> {
    const newItem = new this.model(item);
    return newItem.save();
  }

  async update(id: string, item: any): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async drop(id: string): Promise<unknown> {
    const existingItem = await this.findOne(id);
    if (existingItem) {
      const updatedItem = await this.update(id, {
        $set: { deleteAt: DateTime.now().toMillis() },
      });
      return updatedItem;
    } else {
      throw new Error(`No se encontró un elemento con el ID ${id}`);
    }
  }
}
