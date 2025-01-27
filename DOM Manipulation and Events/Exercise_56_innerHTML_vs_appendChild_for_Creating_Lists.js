// Exercise 56: innerHTML vs. appendChild for Creating Lists

<ul id="myList"></ul>
// document.getElementById("myList").innerHTML += "<li>New item</li>";
let li = document.createElement("li");
li.textContent = "Another item";
document.getElementById("myList").appendChild(li);