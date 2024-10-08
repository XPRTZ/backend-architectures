import { IService } from '../../../shared/interfaces/IService';
import { User } from '../models/User';

export interface IUserService extends IService<User> {
  // Add any additional methods specific to UserService
}
