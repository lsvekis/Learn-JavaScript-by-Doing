// Exercise 9: Traversing the DOM Tree with parentNode and firstChild

<div id="container">
let p = document.querySelector("#container p");
console.log(p.parentNode);    // The div
console.log(p.firstChild);    // The text node inside <p>
firstChild is the first node inside <p> (likely a text node).