import { Order } from '../models/Order';
import { OrderStatus } from '../models/OrderStatus';

export class OrderStatusChangedEvent {
  constructor(public order: Order, public oldStatus: OrderStatus, public newStatus: OrderStatus) {}
}
