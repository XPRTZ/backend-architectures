import { Request, Response, NextFunction } from 'express';
import { Logger } from '../../shared/infrastructure/logging/Logger';

export function loggingMiddleware(logger: Logger) {
  return (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      logger.info(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    });

    next();
  };
}
