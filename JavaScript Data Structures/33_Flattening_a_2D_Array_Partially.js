// 33. Flattening a 2D Array Partially

What You’ll Learn: Using concat() to flatten one level.
Learning Objectives:
let nested = [[1, 2], [3, 4]];
let flattened = nested[0].concat(nested[1]);
console.log(flattened); // [1, 2, 3, 4]
For deeper nesting, a custom approach or flat() (ES2019) might be needed.