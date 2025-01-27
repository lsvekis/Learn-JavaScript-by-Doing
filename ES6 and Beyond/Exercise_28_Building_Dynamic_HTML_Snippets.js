// Exercise 28: Building Dynamic HTML Snippets

Understand a real-world scenario (e.g., building a snippet to insert into the DOM).
let item = "Laptop";
let price = 999;
let htmlSnippet = `
<div class="product">
<h2>${item}</h2>
<p>Price: $${price}</p>
`;
console.log(htmlSnippet);