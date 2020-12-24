function editString(str) {
    var splitString = str.split("");
    splitString.shift();
    splitString.pop();
    var result = splitString.join("");
    console.log(result);
}
editString("hello");
