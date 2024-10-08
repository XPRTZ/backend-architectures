export class OrderId {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  equals(other: OrderId): boolean {
    return this._value === other._value;
  }

  toString(): string {
    return this._value;
  }
}
