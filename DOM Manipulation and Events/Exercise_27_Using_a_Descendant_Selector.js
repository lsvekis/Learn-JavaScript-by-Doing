// Exercise 27: Using a Descendant Selector

<div id="container">
<p class="text">Paragraph inside container</p>
let para = document.querySelector("#container .text");
console.log(para);