import { MembershipTier } from '../types/MembershipTier.enum';

export class Membership {
  constructor(
    public userId: string,
    public tier: MembershipTier
  ) {}
}
