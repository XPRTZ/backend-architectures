export class Price {
  constructor(private readonly _amount: number, private readonly _currency: string = 'USD') {}

  get amount(): number {
    return this._amount;
  }

  get currency(): string {
    return this._currency;
  }

  add(other: Price): Price {
    if (this._currency !== other._currency) {
      throw new Error('Cannot add prices with different currencies');
    }
    return new Price(this._amount + other._amount, this._currency);
  }

  multiply(factor: number): Price {
    return new Price(this._amount * factor, this._currency);
  }

  equals(other: Price): boolean {
    return this._amount === other._amount && this._currency === other._currency;
  }

  toString(): string {
    return `${this._amount.toFixed(2)} ${this._currency}`;
  }
}
