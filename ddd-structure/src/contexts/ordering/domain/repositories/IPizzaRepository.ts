import { Pizza } from '../pizza/Pizza';

export interface IPizzaRepository {
  findById(id: string): Promise<Pizza | null>;
  findAll(): Promise<Pizza[]>;
  // Add other repository methods as needed
}
