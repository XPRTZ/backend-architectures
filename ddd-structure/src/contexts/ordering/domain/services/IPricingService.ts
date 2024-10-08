import { Pizza } from '../pizza/Pizza';
import { Price } from '../pizza/Price';

export interface IPricingService {
  calculatePrice(pizza: Pizza): Price;
  // Add other pricing-related methods as needed
}
