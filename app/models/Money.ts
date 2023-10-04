import { Utils } from "./Utils.js";

export class Money {
  private readonly currency = 'BR';
  private readonly amountCents: number;

  constructor(amount: string) {
    this.amountCents = this.convertStringToCent(amount);
  }
  
  get amount() {
    const value = Utils.fixTwoDecimals(this.amountCents * 100);
    return value;
  }

  percentage(percent: number): string {
    const value = this.amountCents * (percent / 100) * 100;
    return Utils.fixTwoDecimals(value);
  }

  add(moneyObj: Money): string {
    this.validateCurrency(moneyObj.currency);
    const value = (this.amountCents + moneyObj.amountCents) * 100;
    return Utils.fixTwoDecimals(value);
  }

  subtract(moneyObj: Money): string {
    this.validateCurrency(moneyObj.currency);
    const value = (this.amountCents - moneyObj.amountCents) * 100;
    return Utils.fixTwoDecimals(value);
  }

  multiply(moneyObj: Money): string {
    this.validateCurrency(moneyObj.currency);
    const value = (this.amountCents * moneyObj.amountCents) * 100;
    return Utils.fixTwoDecimals(value); 
  }

  private validateCurrency(currency: string) {
    if (this.currency !== currency) {
      throw new TypeError('It was providade a value in a different currency');
    }
  }

  private convertStringToCent(fullAmount: string): number {
    const [amount, cents] = fullAmount.split('.');
    const value = parseInt(amount) / 100 + ((parseInt(cents) / 100) / 100)  
    return value;
  }
}