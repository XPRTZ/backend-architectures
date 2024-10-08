import { IEventBus } from './IEventBus';
import { BaseDomainEvent } from '../../domain/BaseDomainEvent';

export class EventBus implements IEventBus {
  private handlers: { [eventName: string]: ((event: BaseDomainEvent) => void)[] } = {};

  async publish(event: BaseDomainEvent): Promise<void> {
    const eventName = event.getEventName();
    if (this.handlers[eventName]) {
      for (const handler of this.handlers[eventName]) {
        await handler(event);
      }
    }
  }

  subscribe(eventName: string, callback: (event: BaseDomainEvent) => void): void {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(callback);
  }
}
