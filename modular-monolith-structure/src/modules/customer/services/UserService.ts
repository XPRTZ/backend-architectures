import { IUserService } from '../interfaces/IUserService';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';

export class UserService implements IUserService {
  constructor(private userRepository: UserRepository) {}

  // Implement service methods
}
