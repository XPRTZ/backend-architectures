import { RegisterCustomerCommand } from '../../../../src/contexts/customer/application/commands/registerCustomer/RegisterCustomerCommand';
import { RegisterCustomerCommandHandler } from '../../../../src/contexts/customer/application/commands/registerCustomer/RegisterCustomerCommandHandler';
import { ICustomerRepository } from '../../../../src/contexts/customer/domain/repositories/ICustomerRepository';
import { Customer } from '../../../../src/contexts/customer/domain/aggregates/customer/Customer';

describe('RegisterCustomerCommandHandler', () => {
  let mockCustomerRepository: jest.Mocked<ICustomerRepository>;
  let handler: RegisterCustomerCommandHandler;

  beforeEach(() => {
    mockCustomerRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      // Add other methods as needed
    };
    handler = new RegisterCustomerCommandHandler(mockCustomerRepository);
  });

  it('should register a new customer', async () => {
    const command = new RegisterCustomerCommand('John', 'Doe', 'john@example.com', '1234567890');
    
    await handler.execute(command);

    expect(mockCustomerRepository.save).toHaveBeenCalledWith(expect.any(Customer));
    const savedCustomer = mockCustomerRepository.save.mock.calls[0][0];
    expect(savedCustomer.profile.getFullName()).toBe('John Doe');
    expect(savedCustomer.profile.getEmail()).toBe('john@example.com');
    expect(savedCustomer.profile.getPhoneNumber()).toBe('1234567890');
  });

  // Add more tests for error cases and edge scenarios
});
