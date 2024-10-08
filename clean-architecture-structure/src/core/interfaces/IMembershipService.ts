export interface IMembershipService {
  calculateLoyaltyPoints(orderAmount: number): number;
  upgradeMembership(userId: string): Promise<void>;
}
