import { Money } from "../models/Money.js";

export class MoneyController {
  private _input: HTMLInputElement

  constructor() {
    this._input = document.querySelector('#valor');
    this._input.onchange = this.fixTwoDecimals.bind(this);
  }

  add() {
    console.log(this._input.value);
  }

  private fixTwoDecimals(event: InputEvent) {
    this._input.value = parseFloat(this._input.value).toFixed(2);
    console.log("foi?")
  }
}