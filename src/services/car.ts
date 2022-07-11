import { Car, CarSchema } from '../interfaces/CarInterface';
import Service, { ServiceError } from '.';
import CarModel from '../models/car';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };

  readOne = async (id: string): Promise<Car | ServiceError | null> => {
    if (id.length < 24) {
      return null;
    }
    const checkId = await this.model.readOne(id);
    if (!checkId) {
      throw new Error('Object not found');
    }
    return checkId;
  };
}

export default CarService;