// Exercise 64: keydown and keyup Events

document.addEventListener("keydown", (e) => {
console.log("Key down:", e.key);
});
document.addEventListener("keyup", (e) => {
console.log("Key up:", e.key);
});
e.key shows which key was pressed (e.g., "a", "Enter").
keydown fires continuously if the key is held down; keyup fires once when released.