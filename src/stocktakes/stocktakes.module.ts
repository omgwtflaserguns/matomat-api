import { Module } from '@nestjs/common';
import { StocktakesController } from './stocktakes.controller';
import { StocktakesService } from './stocktakes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StocktakeSchema } from './schemas/stocktake.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Stocktake', schema: StocktakeSchema }])],
  controllers: [StocktakesController],
  providers: [StocktakesService],
})
export class StocktakesModule {}
