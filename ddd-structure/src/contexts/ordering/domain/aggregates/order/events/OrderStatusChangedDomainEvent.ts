import { Order } from '../Order';
import { OrderStatus } from '../OrderStatus';

export class OrderStatusChangedDomainEvent {
  constructor(
    public readonly order: Order,
    public readonly oldStatus: OrderStatus,
    public readonly newStatus: OrderStatus
  ) {}
}
