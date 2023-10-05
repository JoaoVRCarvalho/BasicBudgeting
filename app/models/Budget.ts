import { Money } from "./Money.js";

export class Budget extends Money {
  readonly needs = this.percentage(50);
  readonly wants = this.percentage(30);
  readonly savings = this.percentage(20);


}