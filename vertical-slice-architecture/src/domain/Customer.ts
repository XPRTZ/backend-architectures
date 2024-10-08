import { Membership } from './Membership';

export class Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  membership?: Membership;

  constructor(id: string, firstName: string, lastName: string, email: string, password: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  setMembership(membership: Membership): void {
    this.membership = membership;
  }
}
