import { Payment } from '../aggregates/payment/Payment';
import { PaymentId } from '../aggregates/payment/PaymentId';
import { Money } from '../../shared/domain/valueObjects/Money';

export class PaymentDomainService {
  createPayment(orderId: string, amount: Money): Payment {
    const paymentId = new PaymentId(Date.now().toString()); // Simple ID generation, consider using UUID
    return new Payment(paymentId, orderId, amount);
  }

  validatePayment(payment: Payment): boolean {
    // Implement payment validation logic
    return payment.amount.amount > 0;
  }
}
