export class CustomerId {
  constructor(private readonly value: string) {}

  getValue(): string {
    return this.value;
  }

  equals(other: CustomerId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
