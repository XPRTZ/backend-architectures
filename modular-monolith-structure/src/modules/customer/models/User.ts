import { BaseEntity } from '../../../shared/models/BaseEntity';

export class User extends BaseEntity {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
