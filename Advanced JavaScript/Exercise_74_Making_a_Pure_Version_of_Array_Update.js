// Exercise 74: Making a Pure Version of Array Update

function purePush(arr, value) {
return [...arr, value];
}
let nums = [1, 2];
let newNums = purePush(nums, 3);
console.log(nums);    // [1, 2]
console.log(newNums); // [1, 2, 3]
purePush doesn’t change nums; it creates a new array with the extra element, preserving the original.