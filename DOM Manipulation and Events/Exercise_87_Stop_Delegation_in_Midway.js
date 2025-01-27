// Exercise 87: Stop Delegation in Midway

<div id="outer">
<button id="inner">Click me</button>
document.getElementById("inner").addEventListener("click", (e) => {
console.log("Inner button only");
e.stopPropagation();
});
document.getElementById("outer").addEventListener("click", () => {
console.log("Outer div");
});