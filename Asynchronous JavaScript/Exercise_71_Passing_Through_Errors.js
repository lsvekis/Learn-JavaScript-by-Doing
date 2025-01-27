// Exercise 71: Passing Through Errors

async function errorTask() {
throw new Error("Oops from errorTask");
}
async function run() {
try {
await errorTask();
} catch (err) {
console.log("Caught once:", err.message);
throw err;
}
}
run().catch((err) => console.log("Caught again:", err.message));
The error is caught in run()’s try/catch, logged, then rethrown for the outer .catch().