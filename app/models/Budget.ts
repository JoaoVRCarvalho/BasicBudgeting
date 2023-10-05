import { Money } from "./Money.js";
import { Expense } from "./Expense.js";

export class Budget extends Money {
  private _needsAmount = parseFloat(this.percentage(50));
  private _wantsAmount = parseFloat(this.percentage(30));
  private _savingsAmount = parseFloat(this.percentage(20));
  private _expenses: Array<Expense>;

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
  
  get expenses(): ReadonlyArray<Expense> {
    return this._expenses;
  }

  public addExpense(expense: Expense) {
    this._expenses.push(expense);
  } 

}