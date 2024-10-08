import { BaseEntity } from '../../../shared/models/BaseEntity';

export class Membership extends BaseEntity {
  userId: string;
  tier: string;
  startDate: Date;
  endDate: Date;
}
