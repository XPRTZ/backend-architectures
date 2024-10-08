import { Money } from '../../shared/domain/valueObjects/Money';

export interface IPaymentGateway {
  processPayment(orderId: string, amount: Money): Promise<boolean>;
  refundPayment(paymentId: string): Promise<boolean>;
}
