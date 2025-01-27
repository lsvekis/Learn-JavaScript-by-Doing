// Exercise 78: Stopping Event Bubbling

What You’ll Learn: e.stopPropagation().
Learning Objectives:
<div id="outer">
<button id="inner">Stop Bubbling</button>
document.getElementById("inner").addEventListener("click", (e) => {
console.log("Button clicked, stopping bubble.");
e.stopPropagation();
});
document.getElementById("outer").addEventListener("click", () => {
console.log("Outer div click - won't happen if bubble is stopped");
});
Because e.stopPropagation() is called in the button’s handler, the event never bubbles up to the #outer listener.