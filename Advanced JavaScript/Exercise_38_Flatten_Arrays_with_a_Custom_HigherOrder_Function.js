// Exercise 38: Flatten Arrays with a Custom Higher-Order Function

function flatten(arr) {
return arr.reduce((acc, val) => acc.concat(val), []);
}
let nested = [[1, 2], [3, 4]];
console.log(flatten(nested)); // [1, 2, 3, 4]