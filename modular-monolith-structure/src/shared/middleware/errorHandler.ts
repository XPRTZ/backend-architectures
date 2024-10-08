import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';
import { logger } from '../utils/logger';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    logger.error(err.message, { type: err.type, statusCode: err.statusCode });
    res.status(err.statusCode).json({ error: err.message, type: err.type });
  } else {
    logger.error('Unhandled error', { error: err });
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
