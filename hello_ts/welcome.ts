export function Welcome(name) {
  console.log("Welcome" + " " + name);
}
var name = "ts";
Welcome(name);

function add(a, b) {
  console.log(a + b);
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
