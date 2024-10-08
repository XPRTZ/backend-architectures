import { RequestHandler } from '../../shared/mediation/RequestHandler';
import { ProcessPaymentDto, ProcessPaymentResultDto } from './ProcessPayment.dto';
import { AppError } from '../../shared/errors/AppError';

export class ProcessPaymentHandler implements RequestHandler<ProcessPaymentDto, ProcessPaymentResultDto> {
  constructor(private dto: ProcessPaymentDto) {}

  async handle(): Promise<ProcessPaymentResultDto> {
    // Implement the business logic for processing payment
    // This is a placeholder implementation
    const { orderId, amount, paymentMethod } = this.dto;

    // In a real implementation, you would integrate with a payment gateway
    if (amount > 0 && ['credit_card', 'paypal'].includes(paymentMethod)) {
      return {
        orderId,
        transactionId: `txn_${Date.now()}`,
        status: 'success',
        message: 'Payment processed successfully',
      };
    }

    throw new AppError('Payment processing failed', 400);
  }
}
