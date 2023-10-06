class Utils {

  static showDecimal(num: string | number) {
    let value: string
    typeof num !== 'string' ? value = num.toString() : value = num; 
    
    const regExpression = new RegExp("^-?\\d+(?:\\.\\d{0," + 2 + "})?", "g");
    const inputValue = value.match(regExpression)[0];
    const dotIndex = inputValue.indexOf('.');

    if (dotIndex === -1) {
      return `${inputValue}.${'0'.repeat(2)}`;
    }
    
    let baseNumberOfZeros = 2;
    if (inputValue[dotIndex + 1] && !inputValue[dotIndex + 2]) {
      baseNumberOfZeros = 3;
    }

    const numberOfZeros = baseNumberOfZeros - (inputValue.length - dotIndex);
    return numberOfZeros > 0 ? `${inputValue + '0'.repeat(numberOfZeros)}`: inputValue;
  }
}

enum expenseType {
  'needs',
  'wants',
  'savings'   
}

export { Utils, expenseType }