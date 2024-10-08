import { RequestHandler } from '../../shared/mediation/RequestHandler';
import { LoginCustomerDto, LoginCustomerResultDto } from './LoginCustomer.dto';
import { AppError } from '../../shared/errors/AppError';

export class LoginCustomerHandler implements RequestHandler<LoginCustomerDto, LoginCustomerResultDto> {
  constructor(private dto: LoginCustomerDto) {}

  async handle(): Promise<LoginCustomerResultDto> {
    // Implement the business logic for customer login
    // This is a placeholder implementation
    const { email, password } = this.dto;

    // In a real implementation, you would validate the credentials against a database
    if (email === 'test@example.com' && password === 'password123') {
      return {
        token: 'dummy_token',
        userId: 'user_123',
      };
    }

    throw new AppError('Invalid credentials', 401);
  }
}
