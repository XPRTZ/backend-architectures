export class ProcessPaymentCommand {
  constructor(
    public readonly paymentId: string,
    public readonly orderId: string,
    public readonly amount: number
  ) {}
}
