import { RegisterCustomerCommand } from '../commands/registerCustomer/RegisterCustomerCommand';
import { UpdateProfileCommand } from '../commands/updateProfile/UpdateProfileCommand';
import { CustomerDTO } from '../dtos/CustomerDTO';

export interface ICustomerService {
  registerCustomer(command: RegisterCustomerCommand): Promise<string>;
  updateProfile(command: UpdateProfileCommand): Promise<void>;
  getCustomer(customerId: string): Promise<CustomerDTO | null>;
  // Add other service methods as needed
}
