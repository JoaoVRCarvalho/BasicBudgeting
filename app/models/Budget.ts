import { Money } from "./Money.js";

export class Budget extends Money {
  private _needsAmount = parseFloat(this.percentage(50));
  private _wantsAmount = parseFloat(this.percentage(30));
  private _savingsAmount = parseFloat(this.percentage(20));

  // getters
  get needs(): number {
    return this._needsAmount;
  }
  get wants(): number {
    return this._wantsAmount;
  }
  get savings(): number {
    return this._savingsAmount;
  }

}