// Exercise 91: Composing Array Methods as Functions

function filterPositives(arr) {
return arr.filter((n) => n > 0);
}
function doubleArr(arr) {
return arr.map((n) => n * 2);
}
function composeArrayOps(...ops) {
return function(arr) {
return ops.reduce((result, op) => op(result), arr);
};
}
let pipeline = composeArrayOps(filterPositives, doubleArr);
let result = pipeline([-1, 0, 2, 3]);
console.log(result); // [4, 6]
Each function transforms the array in a pure manner (returns a new array).