import { CreateOrderCommand } from './CreateOrderCommand';
import { IOrderRepository } from '../../../domain/repositories/IOrderRepository';
import { OrderDomainService } from '../../../domain/services/OrderDomainService';

export class CreateOrderCommandHandler {
  constructor(
    private orderRepository: IOrderRepository,
    private orderDomainService: OrderDomainService
  ) {}

  async handle(command: CreateOrderCommand): Promise<void> {
    // Implement order creation logic
  }
}
