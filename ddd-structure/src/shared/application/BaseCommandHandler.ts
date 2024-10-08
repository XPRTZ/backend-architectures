import { BaseCommand } from './BaseCommand';
import { Result } from '../domain/Result';

export abstract class BaseCommandHandler<T extends BaseCommand, U> {
  abstract execute(command: T): Promise<Result<U>>;
}
