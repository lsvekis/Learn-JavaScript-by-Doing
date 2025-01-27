// 34. Copying an Array by Slicing

What You’ll Learn: Creating a shallow copy with .slice().
Learning Objectives:
let original = [1, 2, 3];
let copy = original.slice();
copy[0] = 9;
console.log("Original:", original);
console.log("Copy:", copy);
slice() without arguments copies the entire array.