import { Order } from '../Order';

export class OrderCreatedDomainEvent {
  constructor(public readonly order: Order) {}
}
