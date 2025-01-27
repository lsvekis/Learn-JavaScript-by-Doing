// Exercise 49: Creating a Text Node with createTextNode

<div id="container"></div>
let textNode = document.createTextNode("Some dynamic text");
let container = document.getElementById("container");
container.appendChild(textNode);