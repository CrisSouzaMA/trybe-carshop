import { expect } from 'chai';
import sinon, { SinonStub} from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../services/car';
import CarMocks from '../mocks/mocksCar';

describe('Testa a service de carro', () => {
  describe('Testa a função create de service',() => {
    before(() => {
      sinon.stub(Model, 'create').resolves(CarMocks.mockCar);
    });

    after(() => {
      (Model.create as SinonStub).restore();
    });

    it('Carro criado com sucesso', async () => {
      const carService = new CarService();
      const creatCar = await carService.create(CarMocks.mockBody);
      expect(creatCar).to.be.equal(CarMocks.mockCar);
    });
  });

  describe('Testa função que retorna todos os carros do banco de dados', () => {
    before(() => {
      sinon.stub(Model, 'find').resolves([CarMocks.mockCar]);
    });

    after(() => {
      (Model.find as SinonStub).restore()
    });

    it('Lista de todos os carros retornou com sucesso', async () => {
      const carService = new CarService();
      const carsList = await carService.read();
      expect(carsList).to.be.deep.equal([CarMocks.mockCar]);
    });
  });

  describe('Testa função que busca o carro por id', () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves(CarMocks.mockCar);
    });

    after(() => {
      (Model.findOne as SinonStub).restore()
    });

    it('Carro retorna com sucesso', async () => {
      const carService = new CarService();
      const carId = await carService.readOne(CarMocks.mockCarId);
      expect(carId).to.be.equal(CarMocks.mockCar);
    });
  })
});