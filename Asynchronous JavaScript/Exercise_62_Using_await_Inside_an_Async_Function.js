// Exercise 62: Using await Inside an Async Function

function delayReturn(val) {
return new Promise((resolve) => setTimeout(() => resolve(val), 500));
}
async function run() {
let result = await delayReturn("Async/Await Result");
console.log("Got result:", result);
}
run();
No explicit .then() needed.