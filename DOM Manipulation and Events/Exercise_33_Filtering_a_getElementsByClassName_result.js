// Exercise 33: Filtering a getElementsByClassName result

<div class="box">1</div>
<div class="box">2</div>
<div class="box bigger">3</div>
let divs = document.getElementsByClassName("box");
let arr = Array.from(divs);
let bigger = arr.filter(el => el.classList.contains("bigger"));
console.log(bigger);
Array.from() converts the live HTMLCollection into a static array, allowing filter(), etc.