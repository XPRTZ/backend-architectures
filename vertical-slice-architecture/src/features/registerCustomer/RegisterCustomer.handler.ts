import { RequestHandler } from '../../shared/mediation/RequestHandler';
import { RegisterCustomerDto, RegisterCustomerResultDto } from './RegisterCustomer.dto';
import { AppError } from '../../shared/errors/AppError';

export class RegisterCustomerHandler implements RequestHandler<RegisterCustomerDto, RegisterCustomerResultDto> {
  constructor(private dto: RegisterCustomerDto) {}

  async handle(): Promise<RegisterCustomerResultDto> {
    // Implement the business logic for registering a customer
    // This is a placeholder implementation
    const { email, firstName, lastName } = this.dto;

    // In a real implementation, you would check if the email is already in use
    // and save the customer data to the database
    const userId = `user_${Date.now()}`;

    return {
      userId,
      email,
      firstName,
      lastName,
    };
  }
}
