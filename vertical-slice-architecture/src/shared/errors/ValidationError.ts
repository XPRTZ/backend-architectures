import { AppError } from './AppError';

export class ValidationError extends AppError {
  constructor(public errors: Record<string, string>) {
    super('Validation Error', 400);
    this.name = 'ValidationError';
  }
}
