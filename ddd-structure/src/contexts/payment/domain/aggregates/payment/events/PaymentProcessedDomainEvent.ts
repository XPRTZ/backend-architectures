import { Payment } from '../Payment';

export class PaymentProcessedDomainEvent {
  constructor(public readonly payment: Payment) {}
}
