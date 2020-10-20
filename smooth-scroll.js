import jump from "node_modules/jump.js/dist/jump.module.js";

var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");

button1.addEventListener("click", () => {
  jump(".project");
});
button2.addEventListener("click", () => {
  jump(".tech");
});
button3.addEventListener("click", () => {
  jump(".contact");
});
