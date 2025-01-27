// Exercise 70: Using the contextmenu Event

<div id="area" style="width:200px;height:100px;background:lightblue;">Right-click me</div>
let area = document.getElementById("area");
area.addEventListener("contextmenu", (e) => {
e.preventDefault();
console.log("Right-click menu prevented!");
});
contextmenu triggers on right-click or special key (e.g., Mac trackpad).
preventDefault() stops the browser context menu from appearing.