import { BaseEntity } from '../../../shared/models/BaseEntity';
import { OrderStatus } from './OrderStatus';
import { Pizza } from './Pizza';

export class Order extends BaseEntity {
  customerId: string;
  pizzas: Pizza[];
  status: OrderStatus;
  totalAmount: number;
}
