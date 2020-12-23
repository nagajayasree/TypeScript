class SquareOfDigit {
  digit: number;
  constructor(input: number) {
    this.digit = input;
  }
  square() {
    console.log(this.digit * this.digit);
  }
}

let number = new SquareOfDigit(9);
number.square();
