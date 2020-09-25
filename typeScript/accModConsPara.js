// Access Modifiers in Constructor parameters
// when we prefix parameters with access modifiers
// typescript compiler will generate a field with exact same name
// and would also initialize that fiels with value of this arg
var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        // -----------No need to initialise-----------
        // this.name = name;
        // this.rollNo = rollNo;
    }
    return Student;
}());
var student = new Student("jay", 34);
console.log(student);
