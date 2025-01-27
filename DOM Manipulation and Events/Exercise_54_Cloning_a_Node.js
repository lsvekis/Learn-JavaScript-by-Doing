// Exercise 54: Cloning a Node

What You’ll Learn: cloneNode() usage.
Learning Objectives:
Decide if you need a deep clone (copy children) or shallow clone.
<div id="original">
let orig = document.getElementById("original");
let clone = orig.cloneNode(true); // deep clone
document.body.appendChild(clone);
cloneNode(true) copies the entire subtree. cloneNode(false) copies only the element itself, no children.