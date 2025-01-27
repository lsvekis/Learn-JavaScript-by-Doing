// Exercise 90: Practical Example: Validating and Transforming Input

function trim(str) { return str.trim(); }
function toLower(str) { return str.toLowerCase(); }
function isNonEmpty(str) { return str.length > 0; }
function composeAll(...fns) {
return (x) => fns.reduce((acc, fn) => fn(acc), x);
}
let cleanInput = composeAll(trim, toLower);
let input = "   HeLLo   ";
let cleaned = cleanInput(input);
console.log(cleaned); // "hello"
console.log(isNonEmpty(cleaned)); // true
We define transformations (trim, toLower) and compose them.