import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import CarModel from '../../../models/car';
import { Model } from 'mongoose';
import MocksCar from '../mocks/mocksCar';

describe('Testa a model de carro', () => {
  describe('Testa função que cria novo carro', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(MocksCar.mockCar)
    });

    after(() => {
      (Model.create as SinonStub). restore();
    });

    it('Carro criado com sucesso', async () => {
      const carModel = new CarModel();
      const createdCar = await carModel.create(MocksCar.mockBody);
      expect(createdCar).to.be.equal(MocksCar.mockCar);
    });
  });
});