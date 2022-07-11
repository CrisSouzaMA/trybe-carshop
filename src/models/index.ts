import { Model as M, isValidObjectId } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T>) { }

  async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  async read(): Promise<T[]> {
    return this.model.find();
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.model.findOne({ _id: id });
  }

  async update(id: string, object: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.model.findByIdAndUpdate(
      id, 
      object,
      { returnOriginal: false },
    );
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this.model.findOneAndDelete({ _id: id });
  }
}

export default MongoModel;
