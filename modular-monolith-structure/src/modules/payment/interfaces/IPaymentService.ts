import { IService } from '../../../shared/interfaces/IService';
import { Payment } from '../models/Payment';

export interface IPaymentService extends IService<Payment> {
  // Add any additional methods specific to PaymentService
}
