import { Expense } from "../models/Expense.js";
import { Money } from "../models/Money.js";
import { Utils } from "../models/Utils.js";

export class ExpenseController {
  private _expenseType: HTMLInputElement;
  private _expenseCost: HTMLInputElement;
  private _expenseDescription: HTMLInputElement;

  constructor() {
    this._expenseType = document.querySelector('#expense-type');
    this._expenseCost = document.querySelector('#expense-cost');
    this._expenseDescription = document.querySelector('#expense-description');
  }

  add() {
    new Expense(this._expenseType.value, this.fixCost(), this._expenseDescription.value);
    console.log(this._expenseType.value, this.fixCost(), this._expenseDescription.value);
  }

  private fixCost() {
    this._expenseCost.value = Utils.showDecimal(this._expenseCost.value);
    const fixedCost = new Money(this._expenseCost.value);
    return fixedCost;
  }
}