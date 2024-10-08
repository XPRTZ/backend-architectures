import { Request, Response, NextFunction } from 'express';
import { Logger } from '../../shared/infrastructure/logging/Logger';

export function errorHandler(logger: Logger) {
  return (err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error('Unhandled error:', err);

    res.status(500).json({
      message: 'Internal server error',
    });
  };
}
