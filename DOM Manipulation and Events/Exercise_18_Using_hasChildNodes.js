// Exercise 18: Using hasChildNodes()

Exercise 18: Using hasChildNodes()
<div id="demo">Hello</div>
let demo = document.getElementById("demo");
console.log(demo.hasChildNodes()); // true, because there's text
hasChildNodes() returns a boolean indicating if there’s at least one child node (including text).