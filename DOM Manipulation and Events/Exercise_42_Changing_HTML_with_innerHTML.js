// Exercise 42: Changing HTML with innerHTML

<div id="container">Some <strong>HTML</strong> here.</div>
let container = document.getElementById("container");
container.innerHTML = "<p>Replaced <em>entirely</em></p>";