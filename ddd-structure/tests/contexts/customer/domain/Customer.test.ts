import { Customer } from '../../../../src/contexts/customer/domain/aggregates/customer/Customer';
import { CustomerId } from '../../../../src/contexts/customer/domain/aggregates/customer/CustomerId';
import { CustomerProfile } from '../../../../src/contexts/customer/domain/aggregates/customer/CustomerProfile';
import { LoyaltyPoints } from '../../../../src/contexts/customer/domain/aggregates/customer/LoyaltyPoints';

describe('Customer', () => {
  it('should create a customer with initial loyalty points', () => {
    const id = new CustomerId('123');
    const profile = new CustomerProfile('John', 'Doe', 'john@example.com', '1234567890');
    const customer = new Customer(id, profile);

    expect(customer.id).toEqual(id);
    expect(customer.profile).toEqual(profile);
    expect(customer.loyaltyPoints).toBeInstanceOf(LoyaltyPoints);
    expect(customer.loyaltyPoints.points).toBe(0);
  });

  // Add more tests for Customer methods here
});
