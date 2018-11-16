import { Injectable } from '@nestjs/common';
import { Stocktake } from './interfaces/stocktake.interface';
import { CreateStocktakeDto } from './dto/create-stocktake.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StocktakesService {

  constructor(@InjectModel('Stocktake') private readonly stocktakeModel: Model<Stocktake>) {}

  private stocktakes: Stocktake[] = [
    {claims: 20, stock: 70, taken: '2018-11-09T12:00:00'},
    {claims: 25, stock: 65, taken: '2018-11-11T12:04:00'},
  ];

  async getAll(): Promise<Stocktake[]>{
    return await this.stocktakeModel.find().exec();
  }

  async create(stocktake: CreateStocktakeDto): Promise<Stocktake> {
    const newStocktake = { claims: stocktake.claims, stock: stocktake.stock, taken: '2018-01-01T14:30:00'};
    const created = new this.stocktakeModel(newStocktake);
    return await created.save();
  }
}
