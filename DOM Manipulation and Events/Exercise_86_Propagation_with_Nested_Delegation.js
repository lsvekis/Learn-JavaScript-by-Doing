// Exercise 86: Propagation with Nested Delegation

<div id="level1">
<div id="level2">
<button id="btn">Click me</button>
document.getElementById("level1").addEventListener("click", () => {
console.log("Level1 handler");
});
document.getElementById("level2").addEventListener("click", () => {
console.log("Level2 handler");
});
document.getElementById("btn").addEventListener("click", () => {
console.log("Button handler");
});