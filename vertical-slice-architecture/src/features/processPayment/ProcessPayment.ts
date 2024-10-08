import { Mediator } from '../../shared/mediation/Mediator';
import { ProcessPaymentDto } from './ProcessPayment.dto';
import { ProcessPaymentHandler } from './ProcessPayment.handler';

export class ProcessPayment {
  constructor(private mediator: Mediator) {}

  async execute(dto: ProcessPaymentDto) {
    return this.mediator.send(new ProcessPaymentHandler(dto));
  }
}
