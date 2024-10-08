import { validators } from '../../../shared/validation/validators';
import { CreateOrderDto } from '../dto/CreateOrderDto';

export const validateCreateOrderDto = (dto: CreateOrderDto): void => {
  validators.isString(dto.customerId, 'customerId');
  // Add more validation as needed
};
