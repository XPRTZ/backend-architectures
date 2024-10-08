import { Request, Response, NextFunction } from 'express';
import { IJWTService } from '../../shared/infrastructure/auth/IJWTService';

export function authenticate(jwtService: IJWTService) {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = jwtService.verifyToken(token);
      (req as any).user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}
