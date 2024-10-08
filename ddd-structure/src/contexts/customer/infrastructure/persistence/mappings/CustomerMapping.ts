import { Customer } from '../../../domain/aggregates/customer/Customer';
import { CustomerId } from '../../../domain/aggregates/customer/CustomerId';
import { CustomerProfile } from '../../../domain/aggregates/customer/CustomerProfile';
import { LoyaltyPoints } from '../../../domain/aggregates/customer/LoyaltyPoints';

export class CustomerMapping {
  static toPersistence(customer: Customer): any {
    return {
      id: customer.id.getValue(),
      firstName: customer.profile.getFirstName(),
      lastName: customer.profile.getLastName(),
      email: customer.profile.getEmail(),
      phoneNumber: customer.profile.getPhoneNumber(),
      loyaltyPoints: customer.loyaltyPoints.getPoints(),
    };
  }

  static toDomain(raw: any): Customer {
    const customerId = new CustomerId(raw.id);
    const profile = new CustomerProfile(raw.firstName, raw.lastName, raw.email, raw.phoneNumber);
    const customer = new Customer(customerId, profile);
    customer.addLoyaltyPoints(raw.loyaltyPoints);
    return customer;
  }
}
