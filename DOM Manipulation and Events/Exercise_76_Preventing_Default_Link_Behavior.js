// Exercise 76: Preventing Default Link Behavior

What You’ll Learn: preventDefault() on a link click.
Learning Objectives:
<a href="https://example.com" id="link">Example.com</a>
let link = document.getElementById("link");
link.addEventListener("click", (e) => {
e.preventDefault();
console.log("Default navigation prevented!");
});
Normally clicking a link navigates the page. preventDefault() stops that.