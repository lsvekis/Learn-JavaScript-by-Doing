// Exercise 19: Counting Function Calls with a Closure

function callTracker(fn) {
let count = 0;
return function(...args) {
count++;
console.log("Called", count, "times");
return fn(...args);
};
}
function sayHi(name) {
console.log("Hi,", name);
}
let trackedSayHi = callTracker(sayHi);
trackedSayHi("Alice");
trackedSayHi("Bob");