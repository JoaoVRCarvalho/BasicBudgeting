export class Money {
  constructor(
    private readonly centsAmount: number, 
    private readonly currency = 'BR'
  ) {}

  Add(value: Money): number {
    let sum = (this.centsAmount + value.centsAmount) / 100
    return sum;
  }
}