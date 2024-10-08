import { Mediator } from '../../shared/mediation/Mediator';
import { ApplyDiscountDto } from './ApplyDiscount.dto';
import { ApplyDiscountHandler } from './ApplyDiscount.handler';

export class ApplyDiscount {
  constructor(private mediator: Mediator) {}

  async execute(dto: ApplyDiscountDto) {
    return this.mediator.send(new ApplyDiscountHandler(dto));
  }
}
