import { ValidationDecorators } from '../../shared/validation/ValidationDecorators';

export class ViewOrderHistoryValidator {
  @ValidationDecorators.required()
  @ValidationDecorators.isString()
  customerId: string;

  @ValidationDecorators.required()
  @ValidationDecorators.isNumber()
  @ValidationDecorators.min(1)
  page: number;

  @ValidationDecorators.required()
  @ValidationDecorators.isNumber()
  @ValidationDecorators.min(1)
  @ValidationDecorators.max(100)
  pageSize: number;
}
