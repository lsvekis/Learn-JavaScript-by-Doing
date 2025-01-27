// Exercise 77: Demonstrating Microtask Flow

What You’ll Learn: If a .then() spawns another .then(), it still processes in the microtask queue.
Learning Objectives:
Promise.resolve()
.then(() => {
console.log("Microtask 1");
return Promise.resolve();
})
.then(() => console.log("Microtask 2"));
setTimeout(() => console.log("Timeout"), 0);
console.log("Sync code");