import { Mediator } from '../../shared/mediation/Mediator';
import { UpdateOrderStatusDto } from './UpdateOrderStatus.dto';
import { UpdateOrderStatusHandler } from './UpdateOrderStatus.handler';

export class UpdateOrderStatus {
  constructor(private mediator: Mediator) {}

  async execute(orderId: string, dto: UpdateOrderStatusDto) {
    return this.mediator.send(new UpdateOrderStatusHandler(orderId, dto));
  }
}
