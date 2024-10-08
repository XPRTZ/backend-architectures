export class CustomerProfile {
  constructor(
    private readonly firstName: string,
    private readonly lastName: string,
    private readonly email: string,
    private readonly phoneNumber: string
  ) {}

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getEmail(): string {
    return this.email;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
