import { ValidationDecorators } from '../../shared/validation/ValidationDecorators';

export class ProcessPaymentValidator {
  @ValidationDecorators.required()
  @ValidationDecorators.isString()
  orderId: string;

  @ValidationDecorators.required()
  @ValidationDecorators.isNumber()
  @ValidationDecorators.min(0)
  amount: number;

  @ValidationDecorators.required()
  @ValidationDecorators.isString()
  paymentMethod: string;
}
