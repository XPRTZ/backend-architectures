type EventHandler = (event: any) => void;

export class EventBus {
  private handlers: Map<string, EventHandler[]> = new Map();

  subscribe(eventType: string, handler: EventHandler): void {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }
    this.handlers.get(eventType)!.push(handler);
  }

  publish(eventType: string, event: any): void {
    const eventHandlers = this.handlers.get(eventType);
    if (eventHandlers) {
      eventHandlers.forEach(handler => handler(event));
    }
  }
}
