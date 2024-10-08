import { IMembershipService } from '../../../core/interfaces/IMembershipService';

export class ManageMembershipUseCase {
  constructor(private membershipService: IMembershipService) {}

  async execute(userId: string): Promise<void> {
    // Implementation for managing user membership
  }
}
