// Exercise 81: Basic Event Delegation Example

<ul id="menu">
document.getElementById("menu").addEventListener("click", (e) => {
if (e.target.tagName === "LI") {
console.log("You clicked:", e.target.textContent);
}
});