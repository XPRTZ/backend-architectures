import { IUserRepository } from '../../../core/interfaces/IUserRepository';
import { UserDto } from '../../../core/dto/UserDto';

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userDto: UserDto): Promise<void> {
    // Implementation for updating a user
  }
}
