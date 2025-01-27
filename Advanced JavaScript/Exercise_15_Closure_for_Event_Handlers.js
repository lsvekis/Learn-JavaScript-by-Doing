// Exercise 15: Closure for Event Handlers

<button id="myBtn">Click me</button>
function createHandler(message) {
return function() {
alert(message);
};
}
let btn = document.getElementById("myBtn");
btn.addEventListener("click", createHandler("Button was clicked!"));