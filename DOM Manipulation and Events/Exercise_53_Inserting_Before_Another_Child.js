// Exercise 53: Inserting Before Another Child

What You’ll Learn: insertBefore() method.
Learning Objectives:
<ul id="list">
<li id="ref">Item B</li>
let newLi = document.createElement("li");
newLi.textContent = "New Inserted Item";
let list = document.getElementById("list");
let ref = document.getElementById("ref");
list.insertBefore(newLi, ref);
list.insertBefore(newLi, ref) places newLi just before the ref item.