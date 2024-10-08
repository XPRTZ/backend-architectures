import { IOrderRepository } from '../../../core/interfaces/IOrderRepository';
import { CreateOrderDto } from '../../../core/dto/CreateOrderDto';

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(createOrderDto: CreateOrderDto): Promise<void> {
    // Implementation for creating an order
  }
}
