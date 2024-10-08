import { AppError } from '../errors/AppError';
import { ErrorTypes } from '../errors/ErrorTypes';

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400, ErrorTypes.VALIDATION_ERROR);
  }
}
