import { Payment } from '../Payment';

export class PaymentProcessed {
  constructor(public readonly payment: Payment) {}
}
