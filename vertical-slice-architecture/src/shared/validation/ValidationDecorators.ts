import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsValidPizzaSize(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidPizzaSize',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return ['small', 'medium', 'large'].includes(value);
        },
      },
    });
  };
}

// Add more custom decorators as needed
