// Exercise 55: Replacing a Child with replaceChild()

Exercise 55: Replacing a Child with replaceChild()
<div id="container">
<p id="old">Old paragraph</p>
let container = document.getElementById("container");
let oldPara = document.getElementById("old");
let newPara = document.createElement("p");
newPara.textContent = "New paragraph!";
container.replaceChild(newPara, oldPara);
container.replaceChild(newNode, oldNode) removes oldNode and inserts newNode in its place.