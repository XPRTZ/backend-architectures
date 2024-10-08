import { Order } from '../aggregates/order/Order';
import { OrderId } from '../aggregates/order/OrderId';

export interface IOrderRepository {
  save(order: Order): Promise<void>;
  findById(orderId: OrderId): Promise<Order | null>;
  // Add other repository methods as needed
}
