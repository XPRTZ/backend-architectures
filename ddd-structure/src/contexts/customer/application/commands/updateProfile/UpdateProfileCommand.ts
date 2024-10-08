export class UpdateProfileCommand {
  constructor(
    public readonly customerId: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly phoneNumber: string
  ) {}
}
