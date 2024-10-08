import { validators } from '../../../shared/validation/validators';
import { ProcessPaymentDto } from '../dto/ProcessPaymentDto';

export const validateProcessPaymentDto = (dto: ProcessPaymentDto): void => {
  validators.isString(dto.orderId, 'orderId');
  validators.isNumber(dto.amount, 'amount');
  validators.isString(dto.paymentMethod, 'paymentMethod');
};
