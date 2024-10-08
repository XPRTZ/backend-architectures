export class PaymentId {
  constructor(private readonly value: string) {}

  getValue(): string {
    return this.value;
  }

  equals(other: PaymentId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
