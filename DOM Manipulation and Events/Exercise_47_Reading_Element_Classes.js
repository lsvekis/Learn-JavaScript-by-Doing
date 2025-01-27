// Exercise 47: Reading Element Classes

<div id="panel" class="hidden compact"></div>
let panel = document.getElementById("panel");
console.log(panel.className);  // "hidden compact"
console.log(panel.classList); // DOMTokenList ["hidden", "compact"]
.className is a string; .classList is a token list with utility methods (add, remove, toggle, contains).