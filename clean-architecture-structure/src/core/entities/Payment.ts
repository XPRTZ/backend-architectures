import { PaymentStatus } from '../types/PaymentStatus.enum';

export class Payment {
  constructor(
    public id: string,
    public orderId: string,
    public amount: number,
    public status: PaymentStatus
  ) {}
}
