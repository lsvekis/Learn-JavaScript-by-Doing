// Exercise 15: Checking Execution Order with a Timer

console.log("Line 1");
setTimeout(() => console.log("Line 2 (async)"), 0);
console.log("Line 3");