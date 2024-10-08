import { BaseEntity } from '../../../shared/models/BaseEntity';
import { Address } from '../../../shared/models/Address';

export class CustomerProfile extends BaseEntity {
  userId: string;
  phoneNumber: string;
  address: Address;
}
