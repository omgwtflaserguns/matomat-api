import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { StocktakesService } from './stocktakes.service';
import { StocktakeDto } from './dto/stocktake.dto';
import { CreateStocktakeDto } from './dto/create-stocktake.dto';
import { Stocktake } from './interfaces/stocktake.interface';

@ApiUseTags('stocktakes')
@Controller('stocktakes')
export class StocktakesController {

  constructor(private stocktakesService: StocktakesService) {}

  @Get()
  @ApiOkResponse({ type: [StocktakeDto] })
  getAll(): Promise<Stocktake[]> {
    return this.stocktakesService.getAll();
  }

  @Post()
  create(@Body() stocktake: CreateStocktakeDto): Promise<StocktakeDto> {
    return this.stocktakesService.create(stocktake);
  }
}
