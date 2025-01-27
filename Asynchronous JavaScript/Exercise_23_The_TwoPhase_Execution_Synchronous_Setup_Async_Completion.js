// Exercise 23: The Two-Phase Execution (Synchronous Setup, Async Completion)

Exercise 23: The Two-Phase Execution (Synchronous Setup, Async Completion)
function delayedTask() {
console.log("Task setup...");
setTimeout(() => {
console.log("Task completed asynchronously.");
}, 1000);
}
delayedTask();
console.log("Continuing execution...");