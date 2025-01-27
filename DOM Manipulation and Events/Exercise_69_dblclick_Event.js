// Exercise 69: dblclick Event

<button id="btn">Double-click me</button>
let btn = document.getElementById("btn");
btn.addEventListener("dblclick", () => {
console.log("Button double-clicked!");
});