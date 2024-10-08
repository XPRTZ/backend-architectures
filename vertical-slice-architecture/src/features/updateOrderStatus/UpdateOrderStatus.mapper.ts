import { Order } from '../../domain/Order';
import { UpdatedOrderDto } from './UpdateOrderStatus.dto';

export class UpdateOrderStatusMapper {
  static toDto(order: Order): UpdatedOrderDto {
    return {
      id: order.id,
      status: order.status,
      updatedAt: order.updatedAt
    };
  }
}
