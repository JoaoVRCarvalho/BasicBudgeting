import { Budget } from "../models/Budget.js";
import { Utils } from "../models/Utils.js";

export class AmountController {
  private _amountInput: HTMLInputElement;
  private _budget: Budget

  constructor() {
    this._amountInput = document.querySelector('#amount-input');
  }

  add() {
    this._amountInput.value = Utils.showDecimal(this._amountInput.value);
    this._budget = new Budget(this._amountInput.value);
    console.log(this.budget.amount);
  }

  get budget(): Budget {
    return this._budget
  }
}