// Exercise 57: Setting and Getting Element Attributes

What You’ll Learn: setAttribute() and getAttribute().
Learning Objectives:
<img id="icon" />
let icon = document.getElementById("icon");
icon.setAttribute("src", "image.png");
console.log(icon.getAttribute("src")); // "image.png"
.setAttribute(attr, value) updates that attribute.
.getAttribute(attr) retrieves the current value.