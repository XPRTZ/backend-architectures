import { Pizza } from '../../../domain/pizza/Pizza';

export class CreateOrderCommand {
  constructor(
    public readonly customerId: string,
    public readonly pizzas: Pizza[],
    public readonly deliveryAddress: string
  ) {}
}
