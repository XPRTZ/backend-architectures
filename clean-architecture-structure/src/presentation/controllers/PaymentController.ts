import { ProcessPaymentUseCase } from '../../application/useCases/payments/ProcessPaymentUseCase';

export class PaymentController {
  constructor(private processPaymentUseCase: ProcessPaymentUseCase) {}

  async processPayment(req, res): Promise<void> {
    // Implementation for handling payment processing request
  }
}
