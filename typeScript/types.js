// types
var count = 5;
count = "a";
var a = 3;
var b = true;
var c = "s";
var d = "2";
var e = [1, 2, 3];
var f = [true, "j", 34];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 2] = "Purple";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
