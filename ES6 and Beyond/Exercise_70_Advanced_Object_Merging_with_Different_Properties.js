// Exercise 70: Advanced Object Merging with Different Properties

let o1 = { a: 1, b: 2 };
let o2 = { b: 3, c: 4 };
let merged = { ...o1, ...o2 };
console.log(merged); // { a: 1, b: 3, c: 4 }