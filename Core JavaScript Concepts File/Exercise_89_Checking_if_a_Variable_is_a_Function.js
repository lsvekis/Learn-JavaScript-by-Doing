// Exercise 89: Checking if a Variable is a Function

function testFunc() {}
let notFunc = 42;
console.log(typeof testFunc === "function"); // true
console.log(typeof notFunc === "function");  // false
typeof someVariable === "function" is a quick check to see if it’s a function.