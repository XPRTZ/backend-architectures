import { IPaymentService } from '../../../core/interfaces/IPaymentService';

export class RefundPaymentUseCase {
  constructor(private paymentService: IPaymentService) {}

  async execute(paymentId: string): Promise<void> {
    // Implementation for refunding a payment
  }
}
