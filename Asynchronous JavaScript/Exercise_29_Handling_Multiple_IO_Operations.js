// Exercise 29: Handling Multiple I/O Operations

console.log("Start tasks");
setTimeout(() => console.log("Task 1 done"), 2000);
setTimeout(() => console.log("Task 2 done"), 1000);
console.log("Both tasks scheduled");
The second finishes first (after ~1s). The first finishes later (after ~2s).