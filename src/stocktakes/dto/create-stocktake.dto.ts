import { ApiModelProperty } from '@nestjs/swagger';

export class CreateStocktakeDto {
  @ApiModelProperty()
  readonly claims: number;

  @ApiModelProperty()
  readonly stock: number;
}