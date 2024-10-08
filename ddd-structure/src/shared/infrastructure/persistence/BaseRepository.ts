import { BaseEntity } from '../../domain/BaseEntity';

export abstract class BaseRepository<T extends BaseEntity> {
  abstract save(entity: T): Promise<void>;
  abstract findById(id: string): Promise<T | null>;
  abstract findAll(): Promise<T[]>;
  abstract delete(id: string): Promise<void>;
}
