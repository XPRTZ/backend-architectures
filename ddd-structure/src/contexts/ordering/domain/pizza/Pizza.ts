import { PizzaSize } from './PizzaSize';
import { Topping } from './Topping';
import { Price } from './Price';

export class Pizza {
  private _id: string;
  private _name: string;
  private _size: PizzaSize;
  private _toppings: Topping[];
  private _price: Price;

  constructor(id: string, name: string, size: PizzaSize, toppings: Topping[], price: Price) {
    this._id = id;
    this._name = name;
    this._size = size;
    this._toppings = toppings;
    this._price = price;
  }

  // Getters
  get id(): string { return this._id; }
  get name(): string { return this._name; }
  get size(): PizzaSize { return this._size; }
  get toppings(): Topping[] { return [...this._toppings]; }
  get price(): Price { return this._price; }

  // Methods
  addTopping(topping: Topping): void {
    this._toppings.push(topping);
    this.recalculatePrice();
  }

  removeTopping(topping: Topping): void {
    this._toppings = this._toppings.filter(t => t.name !== topping.name);
    this.recalculatePrice();
  }

  private recalculatePrice(): void {
    // Implement price recalculation logic
    // This is a placeholder and should be replaced with actual business logic
    const basePrice = 10; // Base price for a pizza
    const toppingPrice = this._toppings.length * 0.5; // Each topping costs 0.5
    const sizeMultiplier = this._size === PizzaSize.LARGE ? 1.5 : (this._size === PizzaSize.MEDIUM ? 1.25 : 1);
    
    this._price = new Price(basePrice + toppingPrice * sizeMultiplier);
  }
}
