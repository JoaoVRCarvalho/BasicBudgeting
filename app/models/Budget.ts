import { Money } from "./Money.js";
import { Expense } from "./Expense.js";

export class Budget extends Money {
  private _needsAmount = new Money(this.percentage(50));
  private _wantsAmount = new Money(this.percentage(30));
  private _savingsAmount = new Money(this.percentage(20));
  private _expenses: Array<Expense>;

  // getters
  get needs(): string {
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

  public addExpense(expense: Expense) {
    this.subtractFromAmount(expense);
    this._expenses.push(expense);
  } 

  private subtractFromAmount(expense: Expense) {
    switch(expense.type) {
      case 'needs': {
        this._needsAmount = new Money(this._needsAmount.subtract(expense.cost));
        console.log(this._needsAmount);
        break;
      }
      case 'wants': {
        this._wantsAmount = new Money(this._wantsAmount.subtract(expense.cost));
        console.log(this._wantsAmount);
        break;
      }
      case 'savings' : {
        this._savingsAmount = new Money(this._savingsAmount.subtract(expense.cost));
        console.log(this._savingsAmount)
        break;
      }
    }
  }
}