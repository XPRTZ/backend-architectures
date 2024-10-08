import { Request, Response, NextFunction } from 'express';
import { logger } from '../shared/logging/logger';
import { AppError } from '../shared/errors/AppError';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal server error' });
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const err = new AppError('Not Found', 404);
  next(err);
};

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
};
