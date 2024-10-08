import { GetCustomerQuery } from './GetCustomerQuery';
import { ICustomerRepository } from '../../../domain/repositories/ICustomerRepository';
import { CustomerDTO } from '../../dtos/CustomerDTO';
import { CustomerId } from '../../../domain/aggregates/customer/CustomerId';

export class GetCustomerQueryHandler {
  constructor(private customerRepository: ICustomerRepository) {}

  async handle(query: GetCustomerQuery): Promise<CustomerDTO | null> {
    const customerId = new CustomerId(query.customerId);
    const customer = await this.customerRepository.findById(customerId);

    if (!customer) {
      return null;
    }

    return new CustomerDTO(
      customer.id.getValue(),
      customer.profile.getFirstName(),
      customer.profile.getLastName(),
      customer.profile.getEmail(),
      customer.profile.getPhoneNumber(),
      customer.loyaltyPoints.getPoints()
    );
  }
}
