// Exercise 8: Single-Threaded vs. Asynchronous

console.log("Single-threaded example");
setTimeout(() => console.log("Async callback"), 1000);
for (let i = 0; i < 3; i++) {
console.log("Loop index:", i);
}