// Exercise 79: Event Loop Delays if the Stack is Busy

setTimeout(() => console.log("Should run quickly, but might be delayed"), 0);
let start = Date.now();
while (Date.now() - start < 1000) {} // block for 1 second
console.log("Done blocking");