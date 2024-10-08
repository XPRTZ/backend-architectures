import { ValidationDecorators } from '../../shared/validation/ValidationDecorators';

export class RegisterCustomerValidator {
  @ValidationDecorators.required()
  @ValidationDecorators.isEmail()
  email: string;

  @ValidationDecorators.required()
  @ValidationDecorators.isString()
  @ValidationDecorators.minLength(6)
  password: string;

  @ValidationDecorators.required()
  @ValidationDecorators.isString()
  firstName: string;

  @ValidationDecorators.required()
  @ValidationDecorators.isString()
  lastName: string;
}
