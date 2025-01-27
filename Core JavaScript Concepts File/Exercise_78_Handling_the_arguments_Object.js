// Exercise 78: Handling the arguments Object

function showArguments() {
for (let i = 0; i < arguments.length; i++) {
console.log(`Argument ${i}:`, arguments[i]);
}
}
showArguments("hello", 42, true);
arguments is an array-like object containing all arguments passed to a function (non-arrow).