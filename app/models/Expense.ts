import { Money } from "./Money"

export class Expense {
  public readonly dateOfInput: string
  public readonly type: string;
  private readonly _cost: Money;
  public description: string;

  constructor(type: string, value: Money, description: string) {
    this.type = type;
    this._cost = value;
    this.description = description;
    this.dateOfInput = new Date().toString()
  }

  get cost(): Money{
    return this._cost;
  }
}