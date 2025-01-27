// Exercise 61: Adding a click Event Listener

What You’ll Learn: addEventListener("click", ...).
Learning Objectives:
<button id="btn">Click me</button>
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
console.log("Button clicked!");
});