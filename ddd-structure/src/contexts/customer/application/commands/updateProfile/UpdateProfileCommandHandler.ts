import { UpdateProfileCommand } from './UpdateProfileCommand';
import { ICustomerRepository } from '../../../domain/repositories/ICustomerRepository';
import { CustomerId } from '../../../domain/aggregates/customer/CustomerId';
import { CustomerProfile } from '../../../domain/aggregates/customer/CustomerProfile';

export class UpdateProfileCommandHandler {
  constructor(private customerRepository: ICustomerRepository) {}

  async handle(command: UpdateProfileCommand): Promise<void> {
    const customerId = new CustomerId(command.customerId);
    const customer = await this.customerRepository.findById(customerId);

    if (!customer) {
      throw new Error('Customer not found');
    }

    const updatedProfile = new CustomerProfile(
      command.firstName,
      command.lastName,
      command.email,
      command.phoneNumber
    );

    customer.updateProfile(updatedProfile);

    await this.customerRepository.save(customer);
  }
}
