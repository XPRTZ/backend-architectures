import { IsString, IsArray, IsNumber, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderDto, OrderItemDto } from './CreateOrder.dto';

export class CreateOrderValidator implements CreateOrderDto {
  @IsString()
  customerId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => OrderItemValidator)
  items: OrderItemDto[];

  @IsNumber()
  total: number;
}

class OrderItemValidator implements OrderItemDto {
  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;
}
