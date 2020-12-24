function sqEveryDigit(number) {
  console.log(number);
  let numStr = number.toString();
  let digits = [];
  for (let i = 0; i < numStr.length; i++) {
    let square = numStr[i] * numStr[i];
    digits.push(square);
  }
  let result = digits.join("");
  console.log(parseInt(result));
}

sqEveryDigit(121);
