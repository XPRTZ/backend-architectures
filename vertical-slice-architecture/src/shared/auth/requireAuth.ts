import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';
import { getCurrentUser } from './getCurrentUser';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    throw new AppError('Unauthorized', 401);
  }
  next();
}
