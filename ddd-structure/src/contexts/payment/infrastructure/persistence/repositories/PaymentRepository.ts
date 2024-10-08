import { IPaymentRepository } from '../../../domain/repositories/IPaymentRepository';
import { Payment } from '../../../domain/aggregates/payment/Payment';
import { PaymentId } from '../../../domain/aggregates/payment/PaymentId';

export class PaymentRepository implements IPaymentRepository {
  private payments: Map<string, Payment> = new Map();

  async save(payment: Payment): Promise<void> {
    this.payments.set(payment.id.getValue(), payment);
  }

  async findById(id: PaymentId): Promise<Payment | null> {
    return this.payments.get(id.getValue()) || null;
  }

  async findByOrderId(orderId: string): Promise<Payment | null> {
    for (const payment of this.payments.values()) {
      if (payment.orderId === orderId) {
        return payment;
      }
    }
    return null;
  }
}
