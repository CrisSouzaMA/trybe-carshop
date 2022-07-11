import CarController from './controllers/car';
import { Car } from './interfaces/CarInterface';
import Router from './routes/Router';
import App from './app';

const server = new App();

const CarControlleer = new CarController();

const carRouter = new Router<Car>();
carRouter.addRoute(CarControlleer);

server.addRouter(carRouter.router);

server.startServer();