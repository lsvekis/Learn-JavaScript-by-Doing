// Exercise 29: Re-Implementing filter

What You’ll Learn: A custom version of .filter().
Learning Objectives:
function myFilter(arr, callback) {
let filtered = [];
for (let i = 0; i < arr.length; i++) {
if (callback(arr[i], i, arr)) {
filtered.push(arr[i]);
}
}
return filtered;
}
let data = [5, 12, 7, 18];
let bigNums = myFilter(data, (x) => x > 10);
console.log(bigNums); // [12, 18]