import { Money } from '../../domain/valueObjects/Money';

export interface IPaymentService {
  processPayment(orderId: string, amount: Money): Promise<boolean>;
  getPaymentStatus(orderId: string): Promise<string>;
}
