import { IMembershipService } from '../interfaces/IMembershipService';
import { Membership } from '../models/Membership';
import { MembershipRepository } from '../repositories/MembershipRepository';

export class MembershipService implements IMembershipService {
  constructor(private membershipRepository: MembershipRepository) {}

  // Implement service methods
}
