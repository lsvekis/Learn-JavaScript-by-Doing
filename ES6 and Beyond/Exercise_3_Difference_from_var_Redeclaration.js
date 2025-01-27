// Exercise 3: Difference from var: Re-declaration

var x = 10;
var x = 20;  // Allowed, though not recommended
console.log(x);
// let y = 10;
// let y = 20;  // Error: cannot re-declare
var supports re-declaration in the same scope (can cause bugs).