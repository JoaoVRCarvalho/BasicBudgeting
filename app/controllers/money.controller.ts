import { Money } from "../models/Money.js";
import { Utils } from "../models/Utils.js";

export class MoneyController {
  private _input: HTMLInputElement

  constructor() {
    this._input = document.querySelector('#valor');
  }

  add() {
    this._input.value = Utils.fixTwoDecimals(this._input.value);
    const salary = new Money(this._input.value);
    console.log(salary.amount);
  }
}