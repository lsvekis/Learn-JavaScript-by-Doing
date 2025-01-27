// Exercise 72: Mouse Coordinates

<div style="height:300px;background:lightgray;" id="area"></div>
let area = document.getElementById("area");
area.addEventListener("click", (e) => {
console.log("X:", e.clientX, "Y:", e.clientY);
});