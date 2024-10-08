import { Payment } from '../models/Payment';

export class PaymentProcessedEvent {
  constructor(public payment: Payment) {}
}
