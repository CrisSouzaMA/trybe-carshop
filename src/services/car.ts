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

  update = async (id: string, obj: Car):
  Promise< Car | ServiceError | null> => {
    if (id.length < 24) {
      return null;
    }
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    const newCar = await this.model.update(id, obj);
    if (!newCar) {
      throw new Error('Object not found');
    }
    return newCar;
  };
}

export default CarService;