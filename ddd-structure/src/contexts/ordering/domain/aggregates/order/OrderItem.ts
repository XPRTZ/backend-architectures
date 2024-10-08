import { Pizza } from '../../pizza/Pizza';
import { Money } from '../../valueObjects/Money';

export class OrderItem {
  private _pizza: Pizza;
  private _quantity: number;
  private _price: Money;

  constructor(pizza: Pizza, quantity: number) {
    this._pizza = pizza;
    this._quantity = quantity;
    this._price = pizza.price.multiply(quantity);
  }

  // Getters
  get pizza(): Pizza { return this._pizza; }
  get quantity(): number { return this._quantity; }
  get price(): Money { return this._price; }

  // Methods
  updateQuantity(newQuantity: number): void {
    this._quantity = newQuantity;
    this._price = this._pizza.price.multiply(newQuantity);
  }
}
