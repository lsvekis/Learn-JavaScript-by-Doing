// 31. Sorting Numbers Properly

What You’ll Learn: Provide a compare function to sort().
Learning Objectives:
let nums = [10, 2, 33, 4];
nums.sort((a, b) => a - b);
console.log(nums); // [2, 4, 10, 33]
(a, b) => a - b sorts ascending; if a - b is negative, a comes first.