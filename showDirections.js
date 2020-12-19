var myButton = document.createElement("button");
function showDirection(directions) {
    var randomDir = Math.floor(Math.random() * directions.length);
    document.write(directions[randomDir]);
}
var directions = ["e", "w", "n", "s"];
myButton.innerHTML = "Show Direction";
document.body.appendChild(myButton);
myButton.addEventListener("click", function (e) { return showDirection(directions); });
// const button = document.createElement("button");
// window.document.appendChild(button);
// document.body.appendChild(button);
// myButton.onclick = showDirection(directions);
// window.document.appendChild(myButton);
// window.onload = () => {
//   var docContent = document.getElementById("content");
//   var button = document.createElement("button");
//   button.innerText = "Get Direction";
//   //   button.onclick = showDirection;
//   docContent.appendChild(button);
// };
// showDirection(directions);
