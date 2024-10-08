import { validators } from '../../../shared/validation/validators';
import { CreateUserDto } from '../dto/CreateUserDto';

export const validateCreateUserDto = (dto: CreateUserDto): void => {
  validators.isString(dto.email, 'email');
  validators.isEmail(dto.email, 'email');
  validators.isString(dto.password, 'password');
  validators.isString(dto.firstName, 'firstName');
  validators.isString(dto.lastName, 'lastName');
};
