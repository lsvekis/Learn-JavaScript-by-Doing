// Exercise 36: Selecting an Element inside Another Element

What You’ll Learn: Using .querySelector() on an element rather than document.
Learning Objectives:
<div id="panel">
<span class="info">Info inside panel</span>
let panel = document.getElementById("panel");
let infoSpan = panel.querySelector(".info");
console.log(infoSpan.textContent);
Elements themselves implement .querySelector(), limiting search to that element’s descendants.