import { IsEnum } from 'class-validator';
import { OrderStatus } from '../../domain/types/OrderStatus';
import { UpdateOrderStatusDto } from './UpdateOrderStatus.dto';

export class UpdateOrderStatusValidator implements UpdateOrderStatusDto {
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
