// Exercise 80: Creating a Simple Drag-and-Drop (Conceptual)

Exercise 80: Creating a Simple Drag-and-Drop (Conceptual)
What You’ll Learn: Mouse events sequence (mousedown, mousemove, mouseup).
Learning Objectives:
<div id="draggable" style="width:50px;height:50px;background:blue;position:absolute;"></div>
let dragItem = document.getElementById("draggable");
let offsetX, offsetY;
dragItem.addEventListener("mousedown", (e) => {
offsetX = e.offsetX;
offsetY = e.offsetY;
document.addEventListener("mousemove", mouseMove);
document.addEventListener("mouseup", mouseUp);
});
function mouseMove(e) {
dragItem.style.left = (e.pageX - offsetX) + "px";
dragItem.style.top = (e.pageY - offsetY) + "px";
}
function mouseUp() {
document.removeEventListener("mousemove", mouseMove);
document.removeEventListener("mouseup", mouseUp);
}