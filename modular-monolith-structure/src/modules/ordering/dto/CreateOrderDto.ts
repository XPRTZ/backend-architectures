import { Pizza } from '../models/Pizza';

export class CreateOrderDto {
  customerId: string;
  pizzas: Pizza[];
}
