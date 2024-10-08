import { ValidationDecorators } from '../../shared/validation/ValidationDecorators';

export class ApplyDiscountValidator {
  @ValidationDecorators.required()
  @ValidationDecorators.isString()
  orderId: string;

  @ValidationDecorators.required()
  @ValidationDecorators.isString()
  membershipId: string;
}
