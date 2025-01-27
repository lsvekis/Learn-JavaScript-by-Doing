// Exercise 83: Priority of Microtasks vs setTimeout

setTimeout(() => console.log("Macrotask 1"), 0);
queueMicrotask(() => console.log("Microtask 1"));
console.log("Sync log");