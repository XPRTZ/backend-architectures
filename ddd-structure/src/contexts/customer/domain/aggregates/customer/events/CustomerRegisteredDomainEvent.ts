import { Customer } from '../Customer';

export class CustomerRegisteredDomainEvent {
  constructor(public readonly customer: Customer) {}
}
