import { Order } from '../Order';

export class OrderCreated {
  constructor(public readonly order: Order) {}
}
