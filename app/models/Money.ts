export class Money {
  private readonly currency = 'BR'
  private readonly centsAmount: number

  constructor(amount: string) {
    this.centsAmount = parseInt(amount) / 100;
  }
  
  get amount() {
    return this.centsAmount / 100;
  }

  percentage(percent: number): number {
    return ((percent / 100) * this.centsAmount) / 100;
  }

  add(moneyObj: Money): number {
    this.validateCurrency(moneyObj.currency);
    return (this.centsAmount + moneyObj.centsAmount) / 100;
  }

  subtract(moneyObj: Money): number {
    this.validateCurrency(moneyObj.currency);
    return (this.centsAmount - moneyObj.centsAmount) / 100;
  }

  multiply(moneyObj: Money): number {
    this.validateCurrency(moneyObj.currency);
    return (this.centsAmount * moneyObj.centsAmount) / 100;
  }

  private validateCurrency(currency: string) {
    if (this.currency !== currency) {
      throw new TypeError('It was providade a value in a different currency');
    }
  }
}