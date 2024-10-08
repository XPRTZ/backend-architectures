import { IOrderRepository } from '../../../domain/repositories/IOrderRepository';
import { Order } from '../../../domain/aggregates/order/Order';
import { OrderId } from '../../../domain/aggregates/order/OrderId';

export class OrderRepository implements IOrderRepository {
  async save(order: Order): Promise<void> {
    // Implement save logic
  }

  async findById(orderId: OrderId): Promise<Order | null> {
    // Implement findById logic
    return null; // Placeholder
  }
}
