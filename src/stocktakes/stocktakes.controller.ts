import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { StocktakesService } from './stocktakes.service';
import { StocktakeDto } from './dto/stocktake.dto';

@Controller('stocktakes')
export class StocktakesController {

  constructor(private stocktakesService: StocktakesService) {}

  @Get()
  @ApiOkResponse({ type: [StocktakeDto] })
  getAll(): StocktakeDto[] {
    return this.stocktakesService.getAll();
  }
}
