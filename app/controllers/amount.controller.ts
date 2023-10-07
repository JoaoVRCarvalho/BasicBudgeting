import { Budget } from "../models/Budget.js";
import { Utils } from "../models/Utils.js";

export class AmountController {
  private _amountInput: HTMLInputElement;

  constructor() {
    this._amountInput = document.querySelector('#amount-input');
  }

  add() {
    this._amountInput.value = Utils.showDecimal(this._amountInput.value);
    const budget = new Budget(this._amountInput.value);
    console.log(budget);
  }
}