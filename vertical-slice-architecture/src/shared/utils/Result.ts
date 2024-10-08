export class Result<T, E = Error> {
  private constructor(
    private readonly isSuccess: boolean,
    private readonly value?: T,
    private readonly error?: E
  ) {}

  static ok<T>(value: T): Result<T> {
    return new Result<T>(true, value);
  }

  static fail<E>(error: E): Result<never, E> {
    return new Result<never, E>(false, undefined, error);
  }

  isOk(): boolean {
    return this.isSuccess;
  }

  isFail(): boolean {
    return !this.isSuccess;
  }

  getValue(): T {
    if (!this.isSuccess) {
      throw new Error('Cannot get the value of a failed result');
    }
    return this.value!;
  }

  getError(): E {
    if (this.isSuccess) {
      throw new Error('Cannot get the error of a successful result');
    }
    return this.error!;
  }

  match<U>(onSuccess: (value: T) => U, onFailure: (error: E) => U): U {
    return this.isSuccess ? onSuccess(this.value!) : onFailure(this.error!);
  }
}
