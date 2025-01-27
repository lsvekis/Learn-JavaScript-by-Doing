// Exercise 60: Reading Computed Style

What You’ll Learn: getComputedStyle(element) to see final layout styles.
Learning Objectives:
Distinguish declared .style vs. computed style (includes CSS from external sheets).
#box { width: 100px; background: blue; }
<div id="box"></div>
let box = document.getElementById("box");
let computed = window.getComputedStyle(box);
console.log(computed.width); // "100px"
getComputedStyle(box) returns the resolved values of all CSS properties.