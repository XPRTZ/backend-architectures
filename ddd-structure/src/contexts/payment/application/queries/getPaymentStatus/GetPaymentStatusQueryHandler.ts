import { GetPaymentStatusQuery } from './GetPaymentStatusQuery';
import { IPaymentRepository } from '../../../domain/repositories/IPaymentRepository';
import { PaymentId } from '../../../domain/aggregates/payment/PaymentId';
import { PaymentStatus } from '../../../domain/aggregates/payment/PaymentStatus';

export class GetPaymentStatusQueryHandler {
  constructor(private paymentRepository: IPaymentRepository) {}

  async handle(query: GetPaymentStatusQuery): Promise<PaymentStatus | null> {
    const payment = await this.paymentRepository.findById(new PaymentId(query.paymentId));
    return payment ? payment.status : null;
  }
}
