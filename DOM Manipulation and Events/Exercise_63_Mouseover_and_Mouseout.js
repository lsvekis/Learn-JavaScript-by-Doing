// Exercise 63: Mouseover and Mouseout

<div id="hoverArea" style="width:200px;height:100px;background:lightgray;">Hover me</div>
let area = document.getElementById("hoverArea");
area.addEventListener("mouseover", () => area.style.background = "yellow");
area.addEventListener("mouseout", () => area.style.background = "lightgray");