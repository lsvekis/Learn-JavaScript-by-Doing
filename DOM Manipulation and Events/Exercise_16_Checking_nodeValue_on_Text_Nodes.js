// Exercise 16: Checking nodeValue on Text Nodes

<div id="test">Text content</div>
let div = document.getElementById("test");
console.log(div.nodeValue); // null for an element
console.log(div.firstChild.nodeValue); // "Text content"