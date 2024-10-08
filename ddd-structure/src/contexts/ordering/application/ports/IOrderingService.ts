import { CreateOrderCommand } from '../commands/createOrder/CreateOrderCommand';
import { UpdateOrderCommand } from '../commands/updateOrder/UpdateOrderCommand';
import { OrderDTO } from '../dtos/OrderDTO';

export interface IOrderingService {
  createOrder(command: CreateOrderCommand): Promise<string>;
  updateOrder(command: UpdateOrderCommand): Promise<void>;
  getOrder(orderId: string): Promise<OrderDTO | null>;
}
