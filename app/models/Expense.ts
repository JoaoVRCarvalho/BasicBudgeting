import { Money } from "./Money"

export class Expanse {
  public readonly type: string;
  private readonly _value: Money;
  public description: string;

  constructor(type: string, value: Money, description: string) {
    this.type = type;
    this._value = value;
    this.description = description;
  }

  get value(): string{
    return this._value.amount;
  }
}