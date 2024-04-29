import { Money } from "./Money.js";
import { Expense } from "./Expense.js";

export class Budget extends Money {
  private _needsAmount = new Money(this.percentage(50));
  private _wantsAmount = new Money(this.percentage(30));
  private _savingsAmount = new Money(this.percentage(20));
  private _expenses: Array<Expense> = [];

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

  public addExpenseToBudget(expense: Expense): void {
    this._expenses.push(expense);
    this.subtractFromAmount(expense);
  }

  private subtractFromAmount(expense: Expense) {
    const amountMap = {
      needs: '_needsAmount',
      wants: '_wantsAmount',
      savings: '_savingsAmount'
    }

    const amountProp = amountMap[expense.type as keyof typeof amountMap];

    if (amountProp) {
      const currentAmount: Money = (this as any)[amountProp];
      (this as any)[amountProp] = new Money(currentAmount.subtract(expense.cost));
    }
  }
}