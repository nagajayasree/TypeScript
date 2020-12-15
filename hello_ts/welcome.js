"use strict";
exports.__esModule = true;
exports.Welcome = void 0;
function Welcome(name) {
    console.log("Welcome" + " " + name);
}
exports.Welcome = Welcome;
var name = "ts";
Welcome(name);
function add(a, b) {
    console.log(a + b);
}
add(1, 3);
function ticket(age) {
    if (age >= 18) {
        console.log("issue ticket");
    }
    else {
        console.log("no ticket");
    }
}
ticket(22);
function concate(a, b) {
    console.log(a + b);
}
concate("t", "s");
function getSize(word) {
    console.log(word.length);
    var len = word.length;
    document.write(len);
    return len;
}
getSize("hello");
var changeUpCase = function (x) {
    console.log(x.toUpperCase());
    document.write(x.toUpperCase());
    return x.toUpperCase();
};
changeUpCase("lowercase");
var changeLowCase = function (y) {
    document.write(y.toUpperCase());
    return y.toLowerCase();
};
changeLowCase("uppercase");

