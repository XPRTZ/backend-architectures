import { BaseEntity } from '../../../shared/models/BaseEntity';

export class LoyaltyPoints extends BaseEntity {
  userId: string;
  points: number;
}
