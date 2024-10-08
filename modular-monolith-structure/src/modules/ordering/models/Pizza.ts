import { BaseEntity } from '../../../shared/models/BaseEntity';

export class Pizza extends BaseEntity {
  name: string;
  size: string;
  toppings: string[];
  price: number;
}
