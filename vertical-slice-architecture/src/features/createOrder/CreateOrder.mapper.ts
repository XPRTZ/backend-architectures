import { Order } from '../../domain/Order';
import { CreatedOrderDto } from './CreateOrder.dto';

export class CreateOrderMapper {
  static toDto(order: Order): CreatedOrderDto {
    return {
      id: order.id,
      customerId: order.customerId,
      items: order.items,
      total: order.total,
      createdAt: order.createdAt
    };
  }
}
