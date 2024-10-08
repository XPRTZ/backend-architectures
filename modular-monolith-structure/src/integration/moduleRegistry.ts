import { Container } from 'inversify';

export class ModuleRegistry {
  private static instance: ModuleRegistry;
  private container: Container;

  private constructor() {
    this.container = new Container();
  }

  static getInstance(): ModuleRegistry {
    if (!ModuleRegistry.instance) {
      ModuleRegistry.instance = new ModuleRegistry();
    }
    return ModuleRegistry.instance;
  }

  getContainer(): Container {
    return this.container;
  }

  registerModule(module: any): void {
    // Register module dependencies
  }
}
