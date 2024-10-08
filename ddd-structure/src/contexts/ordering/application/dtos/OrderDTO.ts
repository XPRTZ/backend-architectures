import { OrderStatus } from '../../domain/aggregates/order/OrderStatus';
import { PizzaDTO } from './PizzaDTO';

export class OrderDTO {
  id: string;
  customerId: string;
  pizzas: PizzaDTO[];
  status: OrderStatus;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
