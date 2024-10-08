import { BaseQuery } from './BaseQuery';
import { Result } from '../domain/Result';

export abstract class BaseQueryHandler<T extends BaseQuery, U> {
  abstract execute(query: T): Promise<Result<U>>;
}
