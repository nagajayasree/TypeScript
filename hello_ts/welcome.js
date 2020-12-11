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
