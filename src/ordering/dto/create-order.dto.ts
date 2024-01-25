import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString({ each: true })
  readonly products: string[];
  @IsString()
  readonly buyerName: string;
  @IsNumber()
  readonly totalQty: number;
  @IsNumber()
  readonly total: number;
}
