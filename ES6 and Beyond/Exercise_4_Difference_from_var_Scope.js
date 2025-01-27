// Exercise 4: Difference from var: Scope

if (true) {
var varInsideBlock = "I'm var";
let letInsideBlock = "I'm let";
}
console.log(varInsideBlock); // Accessible
// console.log(letInsideBlock); // Error
let (and const) are restricted to the block in which they are declared.