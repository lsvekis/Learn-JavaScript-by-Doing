// Exercise 65: Spread in Function Calls

function sum(a, b, c) {
return a + b + c;
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // 6
sum(...nums) is equivalent to sum(1, 2, 3).