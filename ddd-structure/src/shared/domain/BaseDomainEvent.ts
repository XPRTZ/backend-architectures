export abstract class BaseDomainEvent {
  public readonly occurredOn: Date;

  constructor() {
    this.occurredOn = new Date();
  }

  abstract getEventName(): string;
}
