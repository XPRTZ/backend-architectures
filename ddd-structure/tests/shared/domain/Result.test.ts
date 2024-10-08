import { Result } from '../../../src/shared/domain/Result';

describe('Result', () => {
  it('should create a success result', () => {
    const successResult = Result.ok<string>('Success');
    expect(successResult.isSuccess).toBe(true);
    expect(successResult.isFailure).toBe(false);
    expect(successResult.getValue()).toBe('Success');
  });

  it('should create a failure result', () => {
    const failureResult = Result.fail<string>('Error message');
    expect(failureResult.isSuccess).toBe(false);
    expect(failureResult.isFailure).toBe(true);
    expect(failureResult.error).toBe('Error message');
  });

  it('should throw when getting value of a failure result', () => {
    const failureResult = Result.fail<string>('Error message');
    expect(() => failureResult.getValue()).toThrow('Cannot get the value of a failure result');
  });
});
