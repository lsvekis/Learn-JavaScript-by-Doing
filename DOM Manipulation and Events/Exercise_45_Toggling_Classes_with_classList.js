// Exercise 45: Toggling Classes with classList

.highlight {
background-color: yellow;
}
<p id="text">Hover me</p>
let text = document.getElementById("text");
text.addEventListener("mouseover", () => {
text.classList.toggle("highlight");
});
text.classList.toggle("highlight") adds the class if missing, or removes it if present.