import { ValidationDecorators } from '../../shared/validation/ValidationDecorators';

export class LoginCustomerValidator {
  @ValidationDecorators.required()
  @ValidationDecorators.isEmail()
  email: string;

  @ValidationDecorators.required()
  @ValidationDecorators.isString()
  @ValidationDecorators.minLength(6)
  password: string;
}
