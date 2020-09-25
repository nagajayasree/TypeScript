"use strict";
exports.__esModule = true;
exports.Example = void 0;
var Example = /** @class */ (function () {
    function Example(lang) {
        this.lang = lang;
    }
    Example.prototype.code = function () {
        console.log("Code in: " + this.lang);
    };
    return Example;
}());
exports.Example = Example;
