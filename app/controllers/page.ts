import { Budget } from "../models/Budget.js";
import { Money } from "../models/Money.js";
import { Expense } from "../models/Expense.js";
import { Utils } from "../models/Utils.js";

export class MoneyController {
  private _input: HTMLInputElement

  constructor() {
    this._input = document.querySelector('#valor');
  }

  addBudget() {
    this._input.value = Utils.showDecimal(this._input.value)
    const budget = new Budget(this._input.value);
  }
}