import { PaymentStatus } from '../../../domain/aggregates/payment/PaymentStatus';

export class PaymentViewModel {
  constructor(
    public readonly id: string,
    public readonly orderId: string,
    public readonly amount: number,
    public readonly status: PaymentStatus,
    public readonly createdAt: string,
    public readonly updatedAt: string
  ) {}

  static fromPayment(payment: any): PaymentViewModel {
    return new PaymentViewModel(
      payment.id.getValue(),
      payment.orderId,
      payment.amount.amount,
      payment.status,
      payment.createdAt.toISOString(),
      payment.updatedAt.toISOString()
    );
  }
}
