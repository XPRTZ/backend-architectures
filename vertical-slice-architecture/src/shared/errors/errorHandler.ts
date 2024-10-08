import { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';
import { ValidationError } from './ValidationError';
import { logger } from '../logging/logger';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ValidationError) {
    return res.status(400).json({ errors: err.errors });
  }

  if (err instanceof AppError) {
    if (!err.isOperational) {
      logger.error(`Unhandled error: ${err.message}`);
    }
    return res.status(err.statusCode).json({ error: err.message });
  }

  logger.error(`Unhandled error: ${err.message}`);
  return res.status(500).json({ error: 'Internal Server Error' });
}
