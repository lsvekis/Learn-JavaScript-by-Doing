// Exercise 77: Capturing vs. Bubbling Phase

Log how an event travels from the window down to the element (capturing) and back up (bubbling).
<div id="outer">
<button id="inner">Click Me</button>
function logPhase(e) {
console.log(this.id || "window", e.eventPhase);
}
window.addEventListener("click", logPhase, true);   // capture
document.getElementById("outer").addEventListener("click", logPhase, true);
document.getElementById("inner").addEventListener("click", logPhase);
The eventPhase can be 1 (capturing), 2 (at target), or 3 (bubbling).