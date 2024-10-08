import { CreateOrderUseCase } from '../../application/useCases/orders/CreateOrderUseCase';

export class OrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async createOrder(req, res): Promise<void> {
    // Implementation for handling order creation request
  }
}
