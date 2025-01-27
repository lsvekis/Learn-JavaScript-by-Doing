// Exercise 79: Using once Option

<button id="fireOnce">Click only once</button>
let btn = document.getElementById("fireOnce");
btn.addEventListener("click", () => {
console.log("Fired once, removing listener automatically");
}, { once: true });