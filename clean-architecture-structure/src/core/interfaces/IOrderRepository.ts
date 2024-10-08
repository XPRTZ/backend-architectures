import { Order } from '../entities/Order';
// Adjust the path if needed
export interface IOrderRepository {
  createOrder(order: Order): Promise<void>;
  getOrderById(orderId: string): Promise<Order | null>;
  updateOrder(order: Order): Promise<void>;
  deleteOrder(orderId: string): Promise<void>;
}
