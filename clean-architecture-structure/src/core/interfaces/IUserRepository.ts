import { User } from '../entities/User';
export interface IUserRepository {
  createUser(user: User): Promise<void>;
  getUserById(userId: string): Promise<User | null>;
  updateUser(user: User): Promise<void>;
  deleteUser(userId: string): Promise<void>;
}
