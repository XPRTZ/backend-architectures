import { Pizza } from '../../../../core/entities/Pizza';

export class PizzaRepository {
  async getPizzaById(pizzaId: string): Promise<Pizza | null> {
    // Implementation for retrieving a pizza by ID from the database
    return null;
  }

  async getAllPizzas(): Promise<Pizza[]> {
    // Implementation for retrieving all pizzas from the database
    return [];
  }
}
