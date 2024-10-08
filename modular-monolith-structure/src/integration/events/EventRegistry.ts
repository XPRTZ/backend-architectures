import { EventBus } from './EventBus';

export class EventRegistry {
  private static instance: EventRegistry;
  private eventBus: EventBus;

  private constructor() {
    this.eventBus = new EventBus();
  }

  static getInstance(): EventRegistry {
    if (!EventRegistry.instance) {
      EventRegistry.instance = new EventRegistry();
    }
    return EventRegistry.instance;
  }

  getEventBus(): EventBus {
    return this.eventBus;
  }
}
