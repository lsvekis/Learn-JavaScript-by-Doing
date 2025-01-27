// Exercise 53: For...in Loop with Arrays

What You’ll Learn: for...in also works on arrays (though less common).
Learning Objectives:
Understand that it iterates over indexes (not recommended for arrays in many cases).
let arr = ["red", "green", "blue"];
for (let index in arr) {
console.log(index, arr[index]);
}
for...in loops over the keys (indexes) of the array.