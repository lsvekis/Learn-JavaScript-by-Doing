// Exercise 14: Memoization Example

function memoize(fn) {
let cache = {};
return function(x) {
if (cache[x] !== undefined) {
return cache[x];
}
let result = fn(x);
cache[x] = result;
return result;
};
}
function slowSquare(n) {
return n * n;
}
let memoSquare = memoize(slowSquare);
console.log(memoSquare(5));  // calculates 25
console.log(memoSquare(5));  // returns cached 25