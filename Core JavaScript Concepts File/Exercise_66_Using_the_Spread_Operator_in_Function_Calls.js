// Exercise 66: Using the Spread Operator in Function Calls

function add(a, b, c) {
return a + b + c;
}
let nums = [1, 2, 3];
console.log(add(...nums)); // same as add(1,2,3)