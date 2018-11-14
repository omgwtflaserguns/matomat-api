import { Injectable } from '@nestjs/common';
import { StocktakeInterface } from './interfaces/stocktake.interface';

@Injectable()
export class StocktakesService {

  private stocktakes: StocktakeInterface[] = [
    {claims: 20, stock: 70, taken: '2018-11-09T12:00:00'},
    {claims: 25, stock: 65, taken: '2018-11-11T12:04:00'},
  ];

  getAll(): StocktakeInterface[]{
    return this.stocktakes;
  }
}
