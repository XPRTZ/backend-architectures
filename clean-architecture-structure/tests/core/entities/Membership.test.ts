import { Membership } from '../../../src/core/entities/Membership';
import { MembershipTier } from '../../../src/core/types/MembershipTier.enum';

describe('Membership Entity', () => {
  it('should create a membership with default tier', () => {
    const membership = new Membership(/* constructor parameters */);
    expect(membership.tier).toBe(MembershipTier.Basic);
  });

  // Add more tests for Membership entity methods and properties
});
