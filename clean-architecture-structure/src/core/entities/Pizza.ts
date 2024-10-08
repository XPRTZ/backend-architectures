import { PizzaSize } from '../types/PizzaSize.enum';

export class Pizza {
  constructor(
    public id: string,
    public name: string,
    public size: PizzaSize,
    public price: number
  ) {}
}
