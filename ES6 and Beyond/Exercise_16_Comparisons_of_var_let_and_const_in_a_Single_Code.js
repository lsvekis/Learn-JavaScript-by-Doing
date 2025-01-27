// Exercise 16: Comparisons of var, let, and const in a Single Code

var a = 1;
let b = 2;
const c = 3;
a = 10;  // reassigns fine
b = 20;  // reassigns fine
// c = 30;  // error
console.log(a, b, c);