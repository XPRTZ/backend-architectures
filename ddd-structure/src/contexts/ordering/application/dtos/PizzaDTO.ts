import { PizzaSize } from '../../domain/pizza/PizzaSize';

export class PizzaDTO {
  id: string;
  name: string;
  size: PizzaSize;
  toppings: string[];
  price: number;
}
