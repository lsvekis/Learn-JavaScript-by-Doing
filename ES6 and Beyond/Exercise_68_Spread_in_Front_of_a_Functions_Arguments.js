// Exercise 68: Spread in Front of a Function’s Arguments

What You’ll Learn: Another example with a known function (Math methods).
Learning Objectives:
let numbers = [5, 2, 9, 1];
let maxNum = Math.max(...numbers);
console.log(maxNum); // 9
Math.max expects separate numeric arguments; spread helps us pass an array instead.