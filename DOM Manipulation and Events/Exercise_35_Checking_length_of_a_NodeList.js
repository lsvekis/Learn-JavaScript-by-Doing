// Exercise 35: Checking .length of a NodeList

<div class="item"></div>
let items = document.querySelectorAll(".item");
console.log(items.length); // 1
let newDiv = document.createElement("div");
newDiv.className = "item";
document.body.appendChild(newDiv);
console.log(items.length); // still 1 (unchanged, static)