import { Payment } from '../aggregates/payment/Payment';
import { PaymentId } from '../aggregates/payment/PaymentId';

export interface IPaymentRepository {
  save(payment: Payment): Promise<void>;
  findById(id: PaymentId): Promise<Payment | null>;
  findByOrderId(orderId: string): Promise<Payment | null>;
}
