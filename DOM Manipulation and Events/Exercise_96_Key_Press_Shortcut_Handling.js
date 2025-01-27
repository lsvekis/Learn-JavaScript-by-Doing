// Exercise 96: Key Press Shortcut Handling

document.addEventListener("keydown", (e) => {
if (e.ctrlKey && e.key === "s") {
e.preventDefault();
console.log("CTRL+S was pressed!");
}
});