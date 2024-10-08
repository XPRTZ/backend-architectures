export class Mediator {
  private handlers: Map<string, any> = new Map();

  register<TRequest, TResponse>(requestType: new () => TRequest, handler: (request: TRequest) => Promise<TResponse>) {
    this.handlers.set(requestType.name, handler);
  }

  async send<TResponse>(request: any): Promise<TResponse> {
    const handler = this.handlers.get(request.constructor.name);
    if (!handler) {
      throw new Error(`No handler registered for ${request.constructor.name}`);
    }
    return handler(request);
  }
}
