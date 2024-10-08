import { PaymentId } from './PaymentId';
import { PaymentStatus } from './PaymentStatus';
import { Money } from '../../../shared/domain/valueObjects/Money';
import { PaymentProcessedDomainEvent } from './events/PaymentProcessedDomainEvent';

export class Payment {
  private _id: PaymentId;
  private _orderId: string;
  private _amount: Money;
  private _status: PaymentStatus;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(id: PaymentId, orderId: string, amount: Money) {
    this._id = id;
    this._orderId = orderId;
    this._amount = amount;
    this._status = PaymentStatus.PENDING;
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  get id(): PaymentId { return this._id; }
  get orderId(): string { return this._orderId; }
  get amount(): Money { return this._amount; }
  get status(): PaymentStatus { return this._status; }
  get createdAt(): Date { return this._createdAt; }
  get updatedAt(): Date { return this._updatedAt; }

  processPayment(): void {
    if (this._status !== PaymentStatus.PENDING) {
      throw new Error('Payment can only be processed when in PENDING status');
    }
    this._status = PaymentStatus.COMPLETED;
    this._updatedAt = new Date();
    new PaymentProcessedDomainEvent(this);
  }

  failPayment(reason: string): void {
    if (this._status !== PaymentStatus.PENDING) {
      throw new Error('Payment can only be failed when in PENDING status');
    }
    this._status = PaymentStatus.FAILED;
    this._updatedAt = new Date();
    // You might want to create a PaymentFailedDomainEvent here
  }
}
