import { RegisterCustomerCommand } from './RegisterCustomerCommand';
import { ICustomerRepository } from '../../../domain/repositories/ICustomerRepository';
import { Customer } from '../../../domain/aggregates/customer/Customer';
import { CustomerId } from '../../../domain/aggregates/customer/CustomerId';
import { CustomerProfile } from '../../../domain/aggregates/customer/CustomerProfile';

export class RegisterCustomerCommandHandler {
  constructor(private customerRepository: ICustomerRepository) {}

  async handle(command: RegisterCustomerCommand): Promise<string> {
    const customerId = new CustomerId(Date.now().toString()); // Simple ID generation, consider using UUID
    const customerProfile = new CustomerProfile(
      command.firstName,
      command.lastName,
      command.email,
      command.phoneNumber
    );

    const customer = new Customer(customerId, customerProfile);

    await this.customerRepository.save(customer);

    return customerId.getValue();
  }
}
