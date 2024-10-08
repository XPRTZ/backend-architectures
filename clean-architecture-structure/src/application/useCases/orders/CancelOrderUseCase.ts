import { IOrderRepository } from '../../../core/interfaces/IOrderRepository';

export class CancelOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(orderId: string): Promise<void> {
    // Implementation for cancelling an order
  }
}
