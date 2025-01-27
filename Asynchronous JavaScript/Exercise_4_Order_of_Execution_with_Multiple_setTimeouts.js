// Exercise 4: Order of Execution with Multiple setTimeouts

console.log("Start");
setTimeout(() => console.log("Timeout 1: 200ms"), 200);
setTimeout(() => console.log("Timeout 2: 0ms"), 0);
setTimeout(() => console.log("Timeout 3: 100ms"), 100);
console.log("End");
Even setTimeout(..., 0) doesn’t fire instantly—it waits for the current stack to clear.