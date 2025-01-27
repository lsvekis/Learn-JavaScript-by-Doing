// Exercise 82: Using queueMicrotask (ES2020)

Exercise 82: Using queueMicrotask (ES2020)
Understand that queueMicrotask is like .then() with an empty resolved promise.
console.log("Start");
queueMicrotask(() => console.log("Microtask from queueMicrotask"));
console.log("End");