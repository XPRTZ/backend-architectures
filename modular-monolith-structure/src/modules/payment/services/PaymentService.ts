import { IPaymentService } from '../interfaces/IPaymentService';
import { Payment } from '../models/Payment';
import { PaymentRepository } from '../repositories/PaymentRepository';

export class PaymentService implements IPaymentService {
  constructor(private paymentRepository: PaymentRepository) {}

  // Implement service methods
}
