import { Test, TestingModule } from '@nestjs/testing';
import { StocktakesController } from './stocktakes.controller';

describe('Stocktakes Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [StocktakesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: StocktakesController = module.get<StocktakesController>(StocktakesController);
    expect(controller).toBeDefined();
  });
});
