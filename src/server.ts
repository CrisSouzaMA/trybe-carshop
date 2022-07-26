import CustomRouter from './routes/Router';
import App from './app';

import CarController from './controllers/car';

import { Car } from './interfaces/CarInterface';

const server = new App();

const CarControlleer = new CarController();

const CarRouter = new CustomRouter<Car>();
CarRouter.addRoute(CarControlleer);

server.addRouter(CarRouter.router);

export default server;