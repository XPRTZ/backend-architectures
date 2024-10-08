import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../errors/ValidationError';

export function ValidationPipe(type: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const object = plainToClass(type, req.body);
    const errors = await validate(object);

    if (errors.length > 0) {
      const validationErrors: Record<string, string> = {};
      errors.forEach((error) => {
        if (error.constraints) {
          Object.values(error.constraints).forEach((constraint) => {
            validationErrors[error.property] = constraint;
          });
        }
      });
      next(new ValidationError(validationErrors));
    } else {
      req.body = object;
      next();
    }
  };
}
