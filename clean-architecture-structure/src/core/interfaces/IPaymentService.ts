export interface IPaymentService {
  processPayment(orderId: string, amount: number): Promise<boolean>;
  refundPayment(paymentId: string): Promise<boolean>;
}
