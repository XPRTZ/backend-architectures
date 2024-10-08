import { Request, Response, NextFunction } from 'express';
import { logger } from './logger';

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  logger.info(`Incoming request`, {
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
  });

  res.on('finish', () => {
    logger.info(`Outgoing response`, {
      method: req.method,
      url: req.url,
      status: res.statusCode,
    });
  });

  next();
}
