import { Budget } from "../models/Budget.js";
import { Utils } from "../models/Utils.js";

export class MoneyController {
  private _input: HTMLInputElement

  constructor() {
    this._input = document.querySelector('#valor');
  }

  add() {
    this._input.value = Utils.showDecimal(this._input.value).toString();
    const budget = new Budget(this._input.value);
    console.log(budget.amount);
    console.log(budget.needs);
    console.log(budget.wants);
    console.log(budget.savings);
  }
}