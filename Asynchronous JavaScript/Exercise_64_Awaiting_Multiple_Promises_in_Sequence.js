// Exercise 64: Awaiting Multiple Promises in Sequence

function delayedValue(value, ms) {
return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
async function getValuesSequential() {
let val1 = await delayedValue("First", 500);
console.log("Got 1:", val1);
let val2 = await delayedValue("Second", 300);
console.log("Got 2:", val2);
}
getValuesSequential();