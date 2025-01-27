// Exercise 33: Using a Higher-Order Function for Once-Only Execution

function once(fn) {
let called = false;
let result;
return function(...args) {
if (!called) {
result = fn(...args);
called = true;
}
return result;
};
}
let init = once(() => console.log("Init logic runs only once"));
init(); // logs "Init logic runs only once"
init(); // no log