// Exercise 41: Passing Data Through Callbacks

function asyncMultiply(a, b, callback) {
setTimeout(() => {
let result = a * b;
callback(result);
}, 500);
}
asyncMultiply(3, 4, (res) => {
console.log("Async multiply result:", res);
});