// Exercise 5: Combining Synchronous and Asynchronous Logs

console.log("Sync: 1");
setTimeout(() => console.log("Async: 2 (delayed)"), 500);
console.log("Sync: 3");