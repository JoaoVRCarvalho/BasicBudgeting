import { Money } from "../models/Money.js";

export class MoneyController {
  private _input: HTMLInputElement

  constructor() {
    this._input = document.querySelector('#valor');
    this._input.onchange = this.fixTwoDecimals.bind(this);
  }

  add() {
    console.log(this._input.value);
    // console.log(this._input.value);
  }

  private fixTwoDecimals(event: InputEvent) {
    const regExpression = new RegExp("^-?\\d+(?:\\.\\d{0," + 2 + "})?", "g");
    const inputValue = this._input.value.match(regExpression)[0];
    const dotIndex = inputValue.indexOf('.');
    if (dotIndex === -1) return this._input.value =  `${inputValue}.${'0'.repeat(2)}`
    const numberOfZeros= 2 - (inputValue.length - dotIndex);
    return this._input.value =  numberOfZeros > 0 ? `${inputValue + '0'.repeat(numberOfZeros)}`: inputValue
    // this._input.value = parseFloat(this._input.value).toFixed(2);
  }
}