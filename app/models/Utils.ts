export class Utils {

  static fixTwoDecimals(value: string) {
    const regExpression = new RegExp("^-?\\d+(?:\\.\\d{0," + 2 + "})?", "g");
    const inputValue = this._input.value.match(regExpression)[0];
    const commaIndex = inputValue.indexOf('.');

    if (commaIndex === -1) {
      return this._input.value =  `${inputValue}.${'0'.repeat(2)}`
    }
    
    const numberOfZeros= 2 - (inputValue.length - commaIndex);
    return this._input.value =  numberOfZeros > 0 ? `${inputValue + '0'.repeat(numberOfZeros)}`: inputValue
  }

}