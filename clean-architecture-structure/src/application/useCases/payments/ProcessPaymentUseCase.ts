import { IPaymentService } from '../../../core/interfaces/IPaymentService';
import { PaymentDto } from '../../../core/dto/PaymentDto';

export class ProcessPaymentUseCase {
  constructor(private paymentService: IPaymentService) {}

  async execute(paymentDto: PaymentDto): Promise<void> {
    // Implementation for processing a payment
  }
}
