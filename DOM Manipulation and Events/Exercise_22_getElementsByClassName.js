// Exercise 22: getElementsByClassName()

Exercise 22: getElementsByClassName()
Understand that it returns an HTMLCollection (live).
<p class="highlight">Paragraph 1</p>
<p class="highlight">Paragraph 2</p>
let elems = document.getElementsByClassName("highlight");
console.log(elems); // HTMLCollection of 2 <p> elements