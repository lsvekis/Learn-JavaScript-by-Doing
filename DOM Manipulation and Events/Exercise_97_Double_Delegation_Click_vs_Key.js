// Exercise 97: Double Delegation: Click vs. Key

<button id="actionBtn">Press Enter or Click</button>
function doAction() {
console.log("Action performed!");
}
document.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
doAction();
}
});
document.getElementById("actionBtn").addEventListener("click", doAction);