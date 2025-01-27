// Exercise 72: Summation with Rest Parameters

function sumAll(...nums) {
return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10