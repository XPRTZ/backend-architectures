import { Payment } from '../../../../src/contexts/payment/domain/aggregates/payment/Payment';
import { PaymentId } from '../../../../src/contexts/payment/domain/aggregates/payment/PaymentId';
import { PaymentStatus } from '../../../../src/contexts/payment/domain/aggregates/payment/PaymentStatus';
import { Money } from '../../../../src/contexts/ordering/domain/valueObjects/Money';

describe('Payment', () => {
  it('should create a payment with initial status as PENDING', () => {
    const paymentId = new PaymentId('123');
    const orderId = 'order-456';
    const amount = new Money(100);
    
    const payment = new Payment(paymentId, orderId, amount);

    expect(payment.id).toEqual(paymentId);
    expect(payment.orderId).toBe(orderId);
    expect(payment.amount).toEqual(amount);
    expect(payment.status).toBe(PaymentStatus.PENDING);
    expect(payment.createdAt).toBeInstanceOf(Date);
    expect(payment.updatedAt).toBeInstanceOf(Date);
  });

  it('should update payment status', () => {
    const payment = new Payment(new PaymentId('123'), 'order-456', new Money(100));
    
    payment.updateStatus(PaymentStatus.COMPLETED);

    expect(payment.status).toBe(PaymentStatus.COMPLETED);
    expect(payment.updatedAt).not.toEqual(payment.createdAt);
  });

  // Add more tests for Payment methods here
});
