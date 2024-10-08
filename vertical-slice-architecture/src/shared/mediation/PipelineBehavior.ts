export interface PipelineBehavior<TRequest, TResponse> {
  handle(request: TRequest, next: () => Promise<TResponse>): Promise<TResponse>;
}
