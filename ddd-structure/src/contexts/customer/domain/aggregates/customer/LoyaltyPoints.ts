export class LoyaltyPoints {
  constructor(private readonly points: number) {
    if (points < 0) {
      throw new Error('Loyalty points cannot be negative');
    }
  }

  getPoints(): number {
    return this.points;
  }

  add(points: number): LoyaltyPoints {
    return new LoyaltyPoints(this.points + points);
  }

  subtract(points: number): LoyaltyPoints {
    const newPoints = this.points - points;
    if (newPoints < 0) {
      throw new Error('Cannot subtract more points than available');
    }
    return new LoyaltyPoints(newPoints);
  }
}
