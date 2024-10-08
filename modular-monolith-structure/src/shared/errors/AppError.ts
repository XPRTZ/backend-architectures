import { ErrorTypes } from './ErrorTypes';

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public type: ErrorTypes = ErrorTypes.INTERNAL_SERVER_ERROR
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
