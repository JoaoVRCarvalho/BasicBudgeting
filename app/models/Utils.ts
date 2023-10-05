export class Utils {

  static showDecimal(num: string | number) {
    let value;
    typeof num !== 'string' ? value = num.toString() : value = num; 
    
    const regExpression = new RegExp("^-?\\d+(?:\\.\\d{0," + 2 + "})?", "g");
    const inputValue = value.match(regExpression)[0];
    const commaIndex = inputValue.indexOf('.');

    if (commaIndex === -1) {
      return value =  `${inputValue}.${'0'.repeat(2)}`
    }
    
    const numberOfZeros= 2 - (inputValue.length - commaIndex);
    return value =  numberOfZeros > 0 ? `${inputValue + '0'.repeat(numberOfZeros)}`: inputValue
  }

}