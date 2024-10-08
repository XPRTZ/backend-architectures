import { OrderDTO } from '../../../application/dtos/OrderDTO';

export class OrderViewModel {
  id: string;
  customerId: string;
  pizzas: Array<{ name: string; size: string; toppings: string[] }>;
  status: string;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;

  constructor(orderDTO: OrderDTO) {
    this.id = orderDTO.id;
    this.customerId = orderDTO.customerId;
    this.pizzas = orderDTO.pizzas.map(pizza => ({
      name: pizza.name,
      size: pizza.size,
      toppings: pizza.toppings
    }));
    this.status = orderDTO.status;
    this.totalAmount = orderDTO.totalAmount;
    this.createdAt = orderDTO.createdAt.toISOString();
    this.updatedAt = orderDTO.updatedAt.toISOString();
  }
}
