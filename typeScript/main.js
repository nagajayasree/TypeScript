function log(message) {
    console.log(message);
}
// declaring variables
var message = "Hello World";
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i);
}
doSomething();
