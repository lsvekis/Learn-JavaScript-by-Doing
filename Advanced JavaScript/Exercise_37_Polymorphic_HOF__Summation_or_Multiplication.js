// Exercise 37: Polymorphic HOF – Summation or Multiplication

function aggregate(arr, initial, fn) {
let acc = initial;
for (let item of arr) {
acc = fn(acc, item);
}
return acc;
}
let nums = [1, 2, 3, 4];
let sum = aggregate(nums, 0, (a, b) => a + b);
let product = aggregate(nums, 1, (a, b) => a * b);
console.log(sum, product); // 10, 24