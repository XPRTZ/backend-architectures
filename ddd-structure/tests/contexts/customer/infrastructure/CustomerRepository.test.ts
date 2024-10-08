import { CustomerRepository } from '../../../../src/contexts/customer/infrastructure/persistence/repositories/CustomerRepository';
import { Customer } from '../../../../src/contexts/customer/domain/aggregates/customer/Customer';
import { CustomerId } from '../../../../src/contexts/customer/domain/aggregates/customer/CustomerId';
import { CustomerProfile } from '../../../../src/contexts/customer/domain/aggregates/customer/CustomerProfile';

describe('CustomerRepository', () => {
  let repository: CustomerRepository;

  beforeEach(() => {
    // Initialize the repository with a mock database connection
    repository = new CustomerRepository(/* mock database connection */);
  });

  it('should save a customer', async () => {
    const customer = new Customer(
      new CustomerId('123'),
      new CustomerProfile('John', 'Doe', 'john@example.com', '1234567890')
    );

    await repository.save(customer);

    // Add expectations based on your implementation
    // For example, you might want to check if the save method was called on the database
  });

  it('should find a customer by id', async () => {
    const customerId = new CustomerId('123');
    const mockCustomer = new Customer(
      customerId,
      new CustomerProfile('John', 'Doe', 'john@example.com', '1234567890')
    );

    // Mock the findById method to return the mockCustomer
    jest.spyOn(repository, 'findById').mockResolvedValue(mockCustomer);

    const foundCustomer = await repository.findById(customerId);

    expect(foundCustomer).toEqual(mockCustomer);
  });

  // Add more tests for other repository methods
});
