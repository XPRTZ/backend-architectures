import { CreateUserUseCase } from '../../application/useCases/users/CreateUserUseCase';

export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async createUser(req, res): Promise<void> {
    // Implementation for handling user creation request
  }
}
