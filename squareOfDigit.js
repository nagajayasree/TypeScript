var SquareOfDigit = /** @class */ (function () {
    function SquareOfDigit(input) {
        this.digit = input;
    }
    SquareOfDigit.prototype.square = function () {
        console.log(this.digit * this.digit);
    };
    return SquareOfDigit;
}());
var number = new SquareOfDigit(9);
number.square();
