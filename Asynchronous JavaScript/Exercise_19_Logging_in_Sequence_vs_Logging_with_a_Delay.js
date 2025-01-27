// Exercise 19: Logging in Sequence vs. Logging with a Delay

console.log("SYNC: Step 1");
console.log("SYNC: Step 2");
setTimeout(() => console.log("ASYNC: after 1s"), 1000);
console.log("SYNC: Step 3");