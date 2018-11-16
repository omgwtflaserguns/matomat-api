import { ApiModelProperty } from '@nestjs/swagger';
import { Stocktake } from '../interfaces/stocktake.interface';

export class StocktakeDto implements Stocktake {
  @ApiModelProperty({example: 37})
  claims: number;

  @ApiModelProperty({example: 89})
  stock: number;

  @ApiModelProperty({example: '2018-11-01T13:10:04'})
  taken: string;
}