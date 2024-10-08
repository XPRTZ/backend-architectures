import { OrderId } from './OrderId';
import { OrderItem } from './OrderItem';
import { OrderStatus } from './OrderStatus';
import { OrderCreatedDomainEvent } from './events/OrderCreatedDomainEvent';
import { OrderStatusChangedDomainEvent } from './events/OrderStatusChangedDomainEvent';
import { Money } from '../../valueObjects/Money';
import { Address } from '../../valueObjects/Address';

export class Order {
  private _id: OrderId;
  private _customerId: string;
  private _items: OrderItem[];
  private _status: OrderStatus;
  private _totalAmount: Money;
  private _deliveryAddress: Address;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: OrderId,
    customerId: string,
    items: OrderItem[],
    deliveryAddress: Address
  ) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._status = OrderStatus.CREATED;
    this._deliveryAddress = deliveryAddress;
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this.calculateTotalAmount();

    // Raise domain event
    new OrderCreatedDomainEvent(this);
  }

  // Getters
  get id(): OrderId { return this._id; }
  get customerId(): string { return this._customerId; }
  get items(): OrderItem[] { return [...this._items]; }
  get status(): OrderStatus { return this._status; }
  get totalAmount(): Money { return this._totalAmount; }
  get deliveryAddress(): Address { return this._deliveryAddress; }
  get createdAt(): Date { return this._createdAt; }
  get updatedAt(): Date { return this._updatedAt; }

  // Methods
  addItem(item: OrderItem): void {
    this._items.push(item);
    this.calculateTotalAmount();
    this._updatedAt = new Date();
  }

  updateStatus(newStatus: OrderStatus): void {
    if (this._status !== newStatus) {
      const oldStatus = this._status;
      this._status = newStatus;
      this._updatedAt = new Date();

      // Raise domain event
      new OrderStatusChangedDomainEvent(this, oldStatus, newStatus);
    }
  }

  private calculateTotalAmount(): void {
    this._totalAmount = this._items.reduce(
      (total, item) => total.add(item.price),
      new Money(0)
    );
  }
}
