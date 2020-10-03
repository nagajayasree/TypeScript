function addn(x, y) {
    return x + y;
}
console.log(addn(1, 2));
function AddToZ(a, b) {
    var z = 100;
    return a + b + z;
}
console.log(AddToZ(2, 4));
function subOfNums(n1, n2) {
    return n1 - n2;
}
console.log(subOfNums(6, 4));
var NumMul = function (num1, num2) {
    return num1 * num2;
};
console.log(NumMul(6, 6));
var mystring = function (s1, s2) {
    return s1 + " " + s2;
};
console.log(mystring("hello", "world"));
var myName = function (fn, ln) {
    return fn + " " + ln;
};
console.log(myName("jay"));
function getName(firstname, lastname) {
    if (lastname === void 0) { lastname = "sri"; }
    return firstname + " " + lastname;
}
console.log(getName("jaya"));
function getFullName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var addNames = getFullName("vim", "jay", "sai", "ckgh");
console.log(addNames);
