function sqEveryDigit(number) {
    console.log(number);
    var numStr = number.toString();
    var digits = [];
    for (var i = 0; i < numStr.length; i++) {
        var square = numStr[i] * numStr[i];
        digits.push(square);
    }
    var result = digits.join(" ");
    console.log(result);
}
sqEveryDigit(121);
