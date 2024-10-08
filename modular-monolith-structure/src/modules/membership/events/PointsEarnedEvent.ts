import { LoyaltyPoints } from '../models/LoyaltyPoints';

export class PointsEarnedEvent {
  constructor(public loyaltyPoints: LoyaltyPoints, public pointsEarned: number) {}
}
