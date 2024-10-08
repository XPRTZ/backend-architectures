import { PaymentStatus } from './types/PaymentStatus';

export class Payment {
  id: string;
  orderId: string;
  amount: number;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, orderId: string, amount: number, status: PaymentStatus) {
    this.id = id;
    this.orderId = orderId;
    this.amount = amount;
    this.status = status;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  updateStatus(newStatus: PaymentStatus): void {
    this.status = newStatus;
    this.updatedAt = new Date();
  }
}
