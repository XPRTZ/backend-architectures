export class Topping {
  constructor(private readonly _name: string) {}

  get name(): string {
    return this._name;
  }

  equals(other: Topping): boolean {
    return this._name === other._name;
  }
}
