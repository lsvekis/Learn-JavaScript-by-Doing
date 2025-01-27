// Exercise 81: Execution Order with Sync, Microtask, and Macrotask

console.log("1. Synchronous");
Promise.resolve().then(() => console.log("2. Microtask"));
setTimeout(() => console.log("3. Macrotask"), 0);
console.log("4. Synchronous end");
Typical order: 1, 4 (both sync), then 2 (microtask), then 3 (macrotask).