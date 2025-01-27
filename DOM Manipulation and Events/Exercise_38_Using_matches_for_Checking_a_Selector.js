// Exercise 38: Using matches() for Checking a Selector

Exercise 38: Using matches() for Checking a Selector
<div id="demo" class="box"></div>
let demo = document.getElementById("demo");
console.log(demo.matches(".box")); // true
console.log(demo.matches(".highlight")); // false
matches(selectorString) returns a boolean indicating if that element fits the CSS selector.