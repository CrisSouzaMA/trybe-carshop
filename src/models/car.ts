import carSchemaa from '../schemas/carSchema';
import { Car } from '../interfaces/CarInterface';
import MongoModel from './index';

export default class CarModel extends MongoModel<Car> {
  constructor(model = carSchemaa) {
    super(model);
  }
}