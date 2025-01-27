// Exercise 68: Parallel vs. Sequential

async function sequential() {
console.time("sequential");
let a = await delayedVal("A", 500);
let b = await delayedVal("B", 500);
console.timeEnd("sequential");
}
async function parallel() {
console.time("parallel");
let [a, b] = await Promise.all([
delayedVal("A", 500),
delayedVal("B", 500),
]);
console.timeEnd("parallel");
}
sequential().then(parallel);