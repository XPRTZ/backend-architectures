import { IOrderRepository } from '../../../core/interfaces/IOrderRepository';
import { OrderStatus } from '../../../core/types/OrderStatus.enum';

export class UpdateOrderStatusUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(orderId: string, status: OrderStatus): Promise<void> {
    // Implementation for updating order status
  }
}
