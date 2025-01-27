// Exercise 28: Re-Implementing map

What You’ll Learn: A custom version of .map().
Learning Objectives:
function myMap(arr, callback) {
let result = [];
for (let i = 0; i < arr.length; i++) {
result.push(callback(arr[i], i, arr));
}
return result;
}
let original = [1, 2, 3];
let squared = myMap(original, (x) => x ** 2);
console.log(squared); // [1, 4, 9]