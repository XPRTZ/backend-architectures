import { BaseDomainEvent } from '../../domain/BaseDomainEvent';

export interface IEventBus {
  publish(event: BaseDomainEvent): Promise<void>;
  subscribe(eventName: string, callback: (event: BaseDomainEvent) => void): void;
}
