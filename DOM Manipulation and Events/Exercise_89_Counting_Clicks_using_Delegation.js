// Exercise 89: Counting Clicks using Delegation

<div id="buttons">
<button data-count="0">Btn A</button>
<button data-count="0">Btn B</button>
let container = document.getElementById("buttons");
container.addEventListener("click", (e) => {
if (e.target.tagName === "BUTTON") {
let count = parseInt(e.target.dataset.count);
e.target.dataset.count = count + 1;
e.target.textContent = `Clicked ${count+1} times`;
}
});