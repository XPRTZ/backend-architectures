import { BaseEntity } from '../../../shared/models/BaseEntity';
import { PaymentStatus } from './PaymentStatus';

export class Payment extends BaseEntity {
  orderId: string;
  amount: number;
  status: PaymentStatus;
  paymentMethod: string;
}
