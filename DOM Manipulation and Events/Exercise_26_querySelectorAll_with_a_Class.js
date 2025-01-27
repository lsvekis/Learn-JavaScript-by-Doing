// Exercise 26: querySelectorAll() with a Class

Exercise 26: querySelectorAll() with a Class
Differentiate from querySelector() returning only one.
<div class="item">Item1</div>
<div class="item">Item2</div>
let items = document.querySelectorAll(".item");
console.log(items); // NodeList of 2 <div> elements
querySelectorAll() collects all matching elements into a static NodeList (not live).