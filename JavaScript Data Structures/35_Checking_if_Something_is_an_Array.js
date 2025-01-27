// 35. Checking if Something is an Array

What You’ll Learn: Using Array.isArray().
Learning Objectives:
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({}));       // false
typeof [] returns "object", so Array.isArray() is the recommended check for arrays.