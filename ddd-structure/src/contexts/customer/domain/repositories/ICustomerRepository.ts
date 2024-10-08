import { Customer } from '../aggregates/customer/Customer';
import { CustomerId } from '../aggregates/customer/CustomerId';

export interface ICustomerRepository {
  save(customer: Customer): Promise<void>;
  findById(id: CustomerId): Promise<Customer | null>;
  findByEmail(email: string): Promise<Customer | null>;
  // Add other repository methods as needed
}
