// Access Modifiers in Constructor parameters

// when we prefix parameters with access modifiers
// typescript compiler will generate a field with exact same name
// and would also initialize that fiels with value of this arg

class Student {
  constructor(private name: string, public rollNo: number) {
    // -----------No need to initialise-----------
    // this.name = name;
    // this.rollNo = rollNo;
  }
}

let student = new Student("jay", 34);
console.log(student);
