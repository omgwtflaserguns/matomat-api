import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { StocktakesService } from './stocktakes.service';
import { StocktakeDto } from './dto/stocktake.dto';
import { CreateStocktakeDto } from './dto/create-stocktake.dto';

@ApiUseTags('stocktakes')
@Controller('stocktakes')
export class StocktakesController {

  constructor(private stocktakesService: StocktakesService) {}

  @Get()
  @ApiOkResponse({ type: [StocktakeDto] })
  getAll(): StocktakeDto[] {
    return this.stocktakesService.getAll();
  }

  @Post()
  create(@Body() stocktake: CreateStocktakeDto): StocktakeDto {
    return this.stocktakesService.create(stocktake);
  }
}
