// Exercise 11: Hoisting Differences

What You’ll Learn: let and const variables are hoisted but uninitialized (Temporal Dead Zone).
Learning Objectives:
// console.log(hoistedLet); // ReferenceError
let hoistedLet = "I'm declared later";
console.log(hoistedLet);