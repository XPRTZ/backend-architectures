import { Mediator } from '../../shared/mediation/Mediator';
import { ViewOrderHistoryDto } from './ViewOrderHistory.dto';
import { ViewOrderHistoryHandler } from './ViewOrderHistory.handler';

export class ViewOrderHistory {
  constructor(private mediator: Mediator) {}

  async execute(dto: ViewOrderHistoryDto) {
    return this.mediator.send(new ViewOrderHistoryHandler(dto));
  }
}
