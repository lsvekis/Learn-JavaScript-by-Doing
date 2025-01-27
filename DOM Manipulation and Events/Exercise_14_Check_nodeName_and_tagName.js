// Exercise 14: Check nodeName and tagName

<span id="sp">Hello</span>
let sp = document.getElementById("sp");
console.log(sp.nodeName); // "SPAN"
console.log(sp.tagName);  // "SPAN"
For element nodes, nodeName and tagName often match. (Uppercase by default.)