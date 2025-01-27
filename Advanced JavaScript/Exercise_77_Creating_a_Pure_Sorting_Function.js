// Exercise 77: Creating a Pure Sorting Function

function pureSort(arr) {
return [...arr].sort((a, b) => a - b);
}
let nums = [3, 1, 2];
let sorted = pureSort(nums);
console.log(nums);    // [3, 1, 2]
console.log(sorted);  // [1, 2, 3]