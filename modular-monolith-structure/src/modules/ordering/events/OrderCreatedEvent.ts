import { Order } from '../models/Order';

export class OrderCreatedEvent {
  constructor(public order: Order) {}
}
