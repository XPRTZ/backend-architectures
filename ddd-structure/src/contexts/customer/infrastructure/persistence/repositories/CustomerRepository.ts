import { ICustomerRepository } from '../../../domain/repositories/ICustomerRepository';
import { Customer } from '../../../domain/aggregates/customer/Customer';
import { CustomerId } from '../../../domain/aggregates/customer/CustomerId';

export class CustomerRepository implements ICustomerRepository {
  // This is a simple in-memory implementation. In a real application, you would use a database.
  private customers: Map<string, Customer> = new Map();

  async save(customer: Customer): Promise<void> {
    this.customers.set(customer.id.getValue(), customer);
  }

  async findById(id: CustomerId): Promise<Customer | null> {
    return this.customers.get(id.getValue()) || null;
  }

  async findByEmail(email: string): Promise<Customer | null> {
    for (const customer of this.customers.values()) {
      if (customer.profile.getEmail() === email) {
        return customer;
      }
    }
    return null;
  }
}
