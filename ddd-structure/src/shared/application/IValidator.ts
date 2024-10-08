export interface IValidator<T> {
  validate(input: T): Promise<boolean>;
}
