import { IOrderService } from '../interfaces/IOrderService';
import { Order } from '../models/Order';
import { OrderRepository } from '../repositories/OrderRepository';

export class OrderService implements IOrderService {
  constructor(private orderRepository: OrderRepository) {}

  // Implement service methods
}
