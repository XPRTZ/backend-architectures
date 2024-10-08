import { OrderStatus } from '../types/OrderStatus.enum';
import { Pizza } from './Pizza';

export class Order {
  constructor(
    public id: string,
    public userId: string,
    public pizzas: Pizza[],
    public status: OrderStatus,
    public totalAmount: number
  ) {}
}
