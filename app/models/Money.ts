export class Money {
  private readonly currency = 'BR'
  private readonly centsAmount: number

  constructor(amount: string) {
    this.centsAmount = parseInt(amount) / 100 
  }
  
  get amount() {
    return this.centsAmount / 100
  }

  percentage(percent: number): number {
    return (percent / 100) * (this.centsAmount * 100)
  }

  add(value: Money): number {
    this.validateCurrency(value.currency);
    return (this.centsAmount + value.centsAmount) / 100;
  }

  subtract(value: Money): number {
    this.validateCurrency(value.currency);
    return (this.centsAmount - value.centsAmount) / 100;
  }

  private validateCurrency(currency: string) {
    if (this.currency !== currency) {
      throw new TypeError('It was providade a value in a different currency')
    }
  }
}