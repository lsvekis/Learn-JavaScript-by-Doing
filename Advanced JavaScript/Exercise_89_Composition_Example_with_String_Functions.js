// Exercise 89: Composition Example with String Functions

function toUpper(str) { return str.toUpperCase(); }
function exclaim(str) { return str + "!!!"; }
function compose(f, g) {
return (x) => f(g(x));
}
let excitedShout = compose(exclaim, toUpper);
console.log(excitedShout("hello")); // "HELLO!!!"
excitedShout("hello") first calls toUpper("hello") -> "HELLO", then exclaim("HELLO") -> "HELLO!!!".