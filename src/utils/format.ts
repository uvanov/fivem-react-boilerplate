export class Format {
  static addZeroToDigit(digit: number) {
    return (digit < 10 ? '0' : '') + digit;
  }
}