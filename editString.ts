function editString(str: string) {
  let splitString = str.split("");
  splitString.shift();
  splitString.pop();
  let result = splitString.join("");
  console.log(result);
}

editString("hello");
