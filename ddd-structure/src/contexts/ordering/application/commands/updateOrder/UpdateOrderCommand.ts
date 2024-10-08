import { OrderStatus } from '../../../domain/aggregates/order/OrderStatus';

export class UpdateOrderCommand {
  constructor(
    public readonly orderId: string,
    public readonly newStatus: OrderStatus
  ) {}
}
