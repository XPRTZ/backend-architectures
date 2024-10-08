import { ProcessPaymentCommand } from '../../../../src/contexts/payment/application/commands/processPayment/ProcessPaymentCommand';
import { ProcessPaymentCommandHandler } from '../../../../src/contexts/payment/application/commands/processPayment/ProcessPaymentCommandHandler';
import { IPaymentRepository } from '../../../../src/contexts/payment/domain/repositories/IPaymentRepository';
import { IPaymentGateway } from '../../../../src/contexts/payment/application/ports/IPaymentGateway';
import { Payment } from '../../../../src/contexts/payment/domain/aggregates/payment/Payment';
import { PaymentStatus } from '../../../../src/contexts/payment/domain/aggregates/payment/PaymentStatus';
import { Money } from '../../../../src/contexts/ordering/domain/valueObjects/Money';

describe('ProcessPaymentCommandHandler', () => {
  let mockPaymentRepository: jest.Mocked<IPaymentRepository>;
  let mockPaymentGateway: jest.Mocked<IPaymentGateway>;
  let handler: ProcessPaymentCommandHandler;

  beforeEach(() => {
    mockPaymentRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      // Add other methods as needed
    };
    mockPaymentGateway = {
      processPayment: jest.fn(),
      // Add other methods as needed
    };
    handler = new ProcessPaymentCommandHandler(mockPaymentRepository, mockPaymentGateway);
  });

  it('should process a payment successfully', async () => {
    const command = new ProcessPaymentCommand('order-123', 100);
    mockPaymentGateway.processPayment.mockResolvedValue(true);
    
    await handler.execute(command);

    expect(mockPaymentGateway.processPayment).toHaveBeenCalledWith(expect.any(Payment));
    expect(mockPaymentRepository.save).toHaveBeenCalledWith(expect.any(Payment));
    
    const savedPayment = mockPaymentRepository.save.mock.calls[0][0];
    expect(savedPayment.orderId).toBe('order-123');
    expect(savedPayment.amount).toEqual(new Money(100));
    expect(savedPayment.status).toBe(PaymentStatus.COMPLETED);
  });

  it('should handle failed payment', async () => {
    const command = new ProcessPaymentCommand('order-456', 200);
    mockPaymentGateway.processPayment.mockResolvedValue(false);
    
    await handler.execute(command);

    expect(mockPaymentGateway.processPayment).toHaveBeenCalledWith(expect.any(Payment));
    expect(mockPaymentRepository.save).toHaveBeenCalledWith(expect.any(Payment));
    
    const savedPayment = mockPaymentRepository.save.mock.calls[0][0];
    expect(savedPayment.orderId).toBe('order-456');
    expect(savedPayment.amount).toEqual(new Money(200));
    expect(savedPayment.status).toBe(PaymentStatus.FAILED);
  });

  // Add more tests for error cases and edge scenarios
});
