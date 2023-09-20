export class Money {
  constructor(
    private _centsAmount: number, 
    private readonly currency = 'BR'
  ) {}
  
  get amount() {
    return this._centsAmount / 100
  }

  percentage(percent: number): number {
    return (percent / this._centsAmount) * 10000
  }

  add(value: number, currency?: string): number {
    if (currency) {
      this.validateCurrency(currency);
    }
    return (this._centsAmount + value) / 100;
  }

  subtract(value: number, currency?: string): number {
    if (currency) {
      this.validateCurrency(currency);
    }
    return (this._centsAmount - value) / 100;
  }

  private validateCurrency(currency: string) {
    if (this.currency !== currency) {
      throw new TypeError('It was providade a value in a different currency')
    }
  }
}