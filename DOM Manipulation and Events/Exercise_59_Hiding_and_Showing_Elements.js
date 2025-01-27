// Exercise 59: Hiding and Showing Elements

<button id="toggleBtn">Toggle</button>
<p id="text">Toggle me!</p>
let btn = document.getElementById("toggleBtn");
let txt = document.getElementById("text");
btn.addEventListener("click", () => {
if (txt.style.display === "none") {
txt.style.display = "block";
} else {
txt.style.display = "none";
}
});