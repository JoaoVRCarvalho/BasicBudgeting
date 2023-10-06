import { Money } from "./Money.js";
import { Expense } from "./Expense.js";

export class Budget extends Money {
  private _needsAmount = new Money(this.percentage(50));
  private _wantsAmount = new Money(this.percentage(30));
  private _savingsAmount = new Money(this.percentage(20));
  private _expenses: Array<Expense> = [];

  // getters
  get need(): string {
    return this._needsAmount.amount;
  }
  get wants(): string {
    return this._wantsAmount.amount;
  }
  get savings(): string {
    return this._savingsAmount.amount;
  }
  
  get expenses(): ReadonlyArray<Expense> {
    return this._expenses;
  }

  public addExpenseToBudget(expense: Expense): void {
    this._expenses.push(expense);
    this.subtractFromAmount(expense);
  } 

  private subtractFromAmount(expense: Expense) {
    switch(expense.type) {
      case 'needs': {
        this._needsAmount = new Money(this._needsAmount.subtract(expense.cost));
        break;
      }
      case 'wants': {
        this._wantsAmount = new Money(this._wantsAmount.subtract(expense.cost));
        break;
      }
      case 'savings' : {
        this._savingsAmount = new Money(this._savingsAmount.subtract(expense.cost));
        break;
      }
    }
  }
}