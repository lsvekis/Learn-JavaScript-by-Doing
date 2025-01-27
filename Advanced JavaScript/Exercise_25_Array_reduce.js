// Exercise 25: Array reduce()

Exercise 25: Array reduce()
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
The callback is (acc, val) => ..., repeatedly called for each element.