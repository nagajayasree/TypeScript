export function Welcome(name) {
  console.log("Welcome" + " " + name);
}
var name = "ts";
Welcome(name);

function add(a, b) {
  console.log(a + b);
  document.write(a + b);
}
add(1, 3);

function ticket(age: number) {
  if (age >= 18) {
    console.log("issue ticket");
  } else {
    console.log("no ticket");
  }
}
ticket(22);

function concate(a: string, b: string) {
  console.log(a + b);
}
concate("t", "s");

function getSize(word: string) {
  console.log(word.length);
  // let len = word.length;
  // document.write(len);
  // return len;
}
getSize("hello");

let changeUpCase = function (x: string): string {
  console.log(x.toUpperCase());
  document.write(x.toUpperCase());
  return x.toUpperCase();
};
changeUpCase("lowercase");

let changeLowCase: (y: string) => string = function (y: string): string {
  document.write(y.toUpperCase());
  return y.toLowerCase();
};
changeLowCase("uppercase");

