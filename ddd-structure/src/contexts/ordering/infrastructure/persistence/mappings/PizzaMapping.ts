import { Pizza } from '../../../domain/pizza/Pizza';
import { PizzaSize } from '../../../domain/pizza/PizzaSize';
import { Topping } from '../../../domain/pizza/Topping';
import { Price } from '../../../domain/pizza/Price';

export class PizzaMapping {
  static toPersistence(pizza: Pizza): any {
    // Convert Pizza domain object to persistence model
    return {
      id: pizza.id,
      name: pizza.name,
      size: pizza.size,
      toppings: pizza.toppings.map(t => t.name),
      price: pizza.price.amount,
    };
  }

  static toDomain(raw: any): Pizza {
    // Convert persistence model to Pizza domain object
    return new Pizza(
      raw.id,
      raw.name,
      raw.size as PizzaSize,
      raw.toppings.map((t: string) => new Topping(t)),
      new Price(raw.price)
    );
  }
}
