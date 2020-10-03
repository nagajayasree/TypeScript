function addn(x, y) {
  return x + y;
}

console.log(addn(1, 2));

function AddToZ(a, b) {
  let z = 100;
  return a + b + z;
}

console.log(AddToZ(2, 4));

function subOfNums(n1: number, n2: number): number {
  return n1 - n2;
}

console.log(subOfNums(6, 4));

let NumMul = function (num1: number, num2: number): number {
  return num1 * num2;
};

console.log(NumMul(6, 6));

let mystring: (s1: string, s2: string) => string = function (
  s1: string,
  s2: string
): string {
  return s1 + " " + s2;
};

console.log(mystring("hello", "world"));

let myName: (fn: string, ln?: string) => string = function (
  fn: string,
  ln: string
): string {
  return fn + " " + ln;
};

console.log(myName("jay"));

function getName(firstname: string, lastname = "sri") {
  return firstname + " " + lastname;
}

console.log(getName("jaya"));

function getFullName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let addNames = getFullName("vim", "jay", "sai", "ckgh");
console.log(addNames);
