import { Module } from '@nestjs/common';
import { StocktakesModule } from './stocktakes/stocktakes.module';

@Module({
  imports: [StocktakesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
