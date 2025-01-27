// Exercise 39: Finding Closest Ancestor with closest()

Exercise 39: Finding Closest Ancestor with closest()
Use closest() for event delegation or checking a container.
<div class="container">
<p id="desc">Paragraph text</p>
let p = document.getElementById("desc");
let container = p.closest(".container");
console.log(container);
closest(".container") walks up the DOM tree until it finds an element matching .container or hits <html>.