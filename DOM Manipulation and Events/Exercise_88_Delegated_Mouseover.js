// Exercise 88: Delegated Mouseover

<ul id="list">
let list = document.getElementById("list");
list.addEventListener("mouseover", (e) => {
if(e.target.tagName === "LI") {
e.target.style.background = "yellow";
}
});
list.addEventListener("mouseout", (e) => {
if(e.target.tagName === "LI") {
e.target.style.background = "";
}
});