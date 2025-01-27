// Exercise 67: Parallel Fetch with Promise.all() in async/await

Exercise 67: Parallel Fetch with Promise.all() in async/await
function delayedVal(val, ms) {
return new Promise((resolve) => setTimeout(() => resolve(val), ms));
}
async function parallelFetch() {
let promises = [
delayedVal("First", 500),
delayedVal("Second", 300),
delayedVal("Third", 600),
];
let results = await Promise.all(promises);
console.log("All done:", results);
}
parallelFetch();
The total time is the longest single delay (600ms).