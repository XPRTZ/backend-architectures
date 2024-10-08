import { Mediator } from '../../shared/mediation/Mediator';
import { CreateOrderDto } from './CreateOrder.dto';
import { CreateOrderHandler } from './CreateOrder.handler';

export class CreateOrder {
  constructor(private mediator: Mediator) {}

  async execute(dto: CreateOrderDto) {
    return this.mediator.send(new CreateOrderHandler(dto));
  }
}
