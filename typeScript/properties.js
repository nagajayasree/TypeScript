var Name = /** @class */ (function () {
    function Name(_id, _firstName, _lastName) {
        this._id = _id;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Name.prototype.getFirstName = function () {
        console.log(this._firstName);
    };
    Object.defineProperty(Name.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("value cannot be less than zero");
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return Name;
}());
var name1 = new Name(1, "jaya", "ramaka");
console.log(name1);
name1.getFirstName(); //to access parameters outside the class
var id = name1.id;
name1.id = 10;
console.log(name1);
