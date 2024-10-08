import { Pizza } from '../../../src/core/entities/Pizza';
import { PizzaSize } from '../../../src/core/types/PizzaSize.enum';

describe('Pizza Entity', () => {
  it('should create a pizza with default size', () => {
    const pizza = new Pizza(/* constructor parameters */);
    expect(pizza.size).toBe(PizzaSize.Medium);
  });

  // Add more tests for Pizza entity methods and properties
});
