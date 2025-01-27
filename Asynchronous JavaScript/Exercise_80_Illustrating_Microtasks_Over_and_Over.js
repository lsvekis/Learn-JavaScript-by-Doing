// Exercise 80: Illustrating Microtasks Over and Over

function microtaskLoop() {
Promise.resolve().then(() => {
console.log("Microtask...");
microtaskLoop(); // recursively create more microtasks
});
}
microtaskLoop();
Each .then() schedules another microtask, which can effectively starve the main thread.