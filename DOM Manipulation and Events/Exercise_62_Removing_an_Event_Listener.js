// Exercise 62: Removing an Event Listener

What You’ll Learn: removeEventListener().
Learning Objectives:
<button id="stop">Stop Listening</button>
<button id="target">Target Button</button>
function handler() {
console.log("Target clicked");
}
let target = document.getElementById("target");
target.addEventListener("click", handler);
document.getElementById("stop").addEventListener("click", () => {
target.removeEventListener("click", handler);
});