// Exercise 99: Using Curried Functions in a Pipeline

function multiply(a, b) {
return a * b;
}
function add(a, b) {
return a + b;
}
let cMultiply = curry(multiply);
let cAdd = curry(add);
let result = cAdd(2)( cMultiply(3)(4) );
// cMultiply(3)(4) = 12, then cAdd(2)(12) = 14
console.log(result); // 14
function curry(fn) {
return function curried(...args) {
if (args.length >= fn.length) return fn(...args);
return (...more) => curried(...args, ...more);
};
}
cMultiply(3)(4) returns 12. Then we do cAdd(2)(12) = 14.