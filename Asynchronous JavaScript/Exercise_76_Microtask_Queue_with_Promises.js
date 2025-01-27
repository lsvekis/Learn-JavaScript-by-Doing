// Exercise 76: Microtask Queue with Promises

What You’ll Learn: .then() callbacks run before setTimeout (microtask vs. macrotask).
Learning Objectives:
Promise.resolve("Microtask").then((val) => console.log(val));
setTimeout(() => console.log("Macrotask"), 0);
console.log("Main stack");