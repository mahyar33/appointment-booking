import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsValidDate(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const date = new Date(value);
          return !isNaN(date.getTime());
        },
        defaultMessage(): string {
          return 'Invalid date format. Use ISO 8601 format (e.g., 2024-05-01T09:00:00Z).';
        },
      },
    });
  };
}
