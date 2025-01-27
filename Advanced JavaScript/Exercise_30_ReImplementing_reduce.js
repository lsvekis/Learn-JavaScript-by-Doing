// Exercise 30: Re-Implementing reduce

What You’ll Learn: A simplified custom .reduce().
Learning Objectives:
function myReduce(arr, callback, initialValue) {
let acc = initialValue;
for (let i = 0; i < arr.length; i++) {
acc = callback(acc, arr[i], i, arr);
}
return acc;
}
let numbers = [1, 2, 3];
let total = myReduce(numbers, (acc, val) => acc + val, 0);
console.log(total); // 6