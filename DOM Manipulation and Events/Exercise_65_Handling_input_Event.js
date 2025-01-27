// Exercise 65: Handling input Event

<input type="text" id="txt" />
<p id="mirror"></p>
let txt = document.getElementById("txt");
let mirror = document.getElementById("mirror");
txt.addEventListener("input", () => {
mirror.textContent = txt.value;
});