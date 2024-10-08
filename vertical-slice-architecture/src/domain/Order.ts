import { OrderStatus } from './types/OrderStatus';
import { Pizza } from './Pizza';
import { Customer } from './Customer';
import { Payment } from './Payment';

export class Order {
  id: string;
  customer: Customer;
  pizzas: Pizza[];
  status: OrderStatus;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
  payment?: Payment;

  constructor(id: string, customer: Customer, pizzas: Pizza[], status: OrderStatus, totalAmount: number) {
    this.id = id;
    this.customer = customer;
    this.pizzas = pizzas;
    this.status = status;
    this.totalAmount = totalAmount;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  updateStatus(newStatus: OrderStatus): void {
    this.status = newStatus;
    this.updatedAt = new Date();
  }

  addPayment(payment: Payment): void {
    this.payment = payment;
    this.updatedAt = new Date();
  }
}
