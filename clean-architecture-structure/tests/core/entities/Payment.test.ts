import { Payment } from '../../../src/core/entities/Payment';
import { PaymentStatus } from '../../../src/core/types/PaymentStatus.enum';

describe('Payment Entity', () => {
  it('should create a payment with default status', () => {
    const payment = new Payment(/* constructor parameters */);
    expect(payment.status).toBe(PaymentStatus.Pending);
  });

  // Add more tests for Payment entity methods and properties
});
