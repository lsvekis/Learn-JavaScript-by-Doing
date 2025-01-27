// Exercise 8: children vs. childNodes

<ul id="list">
let list = document.getElementById("list");
console.log("childNodes:", list.childNodes);
console.log("children:", list.children);
list.childNodes may include text nodes (line breaks), but list.children excludes them.