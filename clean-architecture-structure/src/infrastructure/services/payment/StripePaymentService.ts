import { IPaymentService } from '../../../../core/interfaces/IPaymentService';

export class StripePaymentService implements IPaymentService {
  async processPayment(orderId: string, amount: number): Promise<boolean> {
    // Implementation for processing payment using Stripe
    return true;
  }

  async refundPayment(paymentId: string): Promise<boolean> {
    // Implementation for refunding payment using Stripe
    return true;
  }
}
