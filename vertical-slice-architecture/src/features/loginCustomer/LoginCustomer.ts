import { Mediator } from '../../shared/mediation/Mediator';
import { LoginCustomerDto } from './LoginCustomer.dto';
import { LoginCustomerHandler } from './LoginCustomer.handler';

export class LoginCustomer {
  constructor(private mediator: Mediator) {}

  async execute(dto: LoginCustomerDto) {
    return this.mediator.send(new LoginCustomerHandler(dto));
  }
}
