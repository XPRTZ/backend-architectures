import { validators } from '../../../shared/validation/validators';
import { MembershipDto } from '../dto/MembershipDto';

export const validateMembershipDto = (dto: MembershipDto): void => {
  validators.isString(dto.userId, 'userId');
  validators.isString(dto.tier, 'tier');
  // Add more validation as needed
};
