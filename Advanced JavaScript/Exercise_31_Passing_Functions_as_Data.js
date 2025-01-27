// Exercise 31: Passing Functions as Data

let add = function(a, b) { return a + b; };
let sub = function(a, b) { return a - b; };
function operate(fn, x, y) {
return fn(x, y);
}
console.log(operate(add, 10, 5)); // 15
console.log(operate(sub, 10, 5)); // 5