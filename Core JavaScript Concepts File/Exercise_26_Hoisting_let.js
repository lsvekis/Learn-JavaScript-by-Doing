// Exercise 26: Hoisting let

Recognize the Temporal Dead Zone (TDZ).
// console.log(hoistedLet); // ReferenceError
let hoistedLet = "Let is hoisted differently!";
console.log(hoistedLet);