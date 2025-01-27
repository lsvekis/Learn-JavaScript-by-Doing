// Exercise 85: Using event.currentTarget vs. event.target

<div id="outer" style="padding:20px;background:#ddd;">
<button id="inner">Click</button>
document.getElementById("outer").addEventListener("click", (e) => {
console.log("target:", e.target.id);
console.log("currentTarget:", e.currentTarget.id);
});