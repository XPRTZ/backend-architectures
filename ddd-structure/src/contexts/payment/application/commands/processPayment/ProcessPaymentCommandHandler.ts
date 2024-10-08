import { ProcessPaymentCommand } from './ProcessPaymentCommand';
import { IPaymentRepository } from '../../../domain/repositories/IPaymentRepository';
import { PaymentDomainService } from '../../../domain/services/PaymentDomainService';
import { PaymentId } from '../../../domain/aggregates/payment/PaymentId';
import { Money } from '../../../shared/domain/valueObjects/Money';

export class ProcessPaymentCommandHandler {
  constructor(
    private paymentRepository: IPaymentRepository,
    private paymentDomainService: PaymentDomainService
  ) {}

  async handle(command: ProcessPaymentCommand): Promise<void> {
    const { paymentId, orderId, amount } = command;
    const payment = await this.paymentRepository.findById(new PaymentId(paymentId));

    if (!payment) {
      throw new Error('Payment not found');
    }

    if (this.paymentDomainService.validatePayment(payment)) {
      payment.processPayment();
      await this.paymentRepository.save(payment);
    } else {
      throw new Error('Invalid payment');
    }
  }
}
