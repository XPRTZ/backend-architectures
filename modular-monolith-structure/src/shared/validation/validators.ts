import { ValidationError } from './ValidationError';

export const validators = {
  isString: (value: any, fieldName: string): void => {
    if (typeof value !== 'string') {
      throw new ValidationError(`${fieldName} must be a string`);
    }
  },
  isNumber: (value: any, fieldName: string): void => {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new ValidationError(`${fieldName} must be a number`);
    }
  },
  isEmail: (value: string, fieldName: string): void => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw new ValidationError(`${fieldName} must be a valid email address`);
    }
  },
};
