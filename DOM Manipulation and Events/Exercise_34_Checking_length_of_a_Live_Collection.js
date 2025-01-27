// Exercise 34: Checking .length of a Live Collection

<p class="note">Note 1</p>
<p class="note">Note 2</p>
let notes = document.getElementsByClassName("note");
console.log(notes.length); // 2
let newP = document.createElement("p");
newP.className = "note";
document.body.appendChild(newP);
console.log(notes.length); // 3