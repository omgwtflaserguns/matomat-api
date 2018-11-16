import { Module } from '@nestjs/common';
import { StocktakesModule } from './stocktakes/stocktakes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // DB
    MongooseModule.forRoot('mongodb://localhost/matomat'),

    // Features
    StocktakesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
