class Name {
  constructor(
    private _id: number,
    private _firstName: string,
    private _lastName: string
  ) {}

  getFirstName() {
    console.log(this._firstName);
  }

  get id() {
    return this._id;
  }

  set id(value) {
    if (value < 0) throw new Error("value cannot be less than zero");

    this._id = value;
  }
}

let name1 = new Name(1, "jaya", "ramaka");
console.log(name1);
name1.getFirstName(); //to access parameters outside the class
let id = name1.id;
name1.id = 10;
console.log(name1);
