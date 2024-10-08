import { Mediator } from '../../shared/mediation/Mediator';
import { RegisterCustomerDto } from './RegisterCustomer.dto';
import { RegisterCustomerHandler } from './RegisterCustomer.handler';

export class RegisterCustomer {
  constructor(private mediator: Mediator) {}

  async execute(dto: RegisterCustomerDto) {
    return this.mediator.send(new RegisterCustomerHandler(dto));
  }
}
