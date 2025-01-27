// Exercise 70: Using await in Try/Finally

Parallel to .finally() in promises.
async function doTask() {
try {
let data = await delayedVal("Task data", 300);
console.log("Data:", data);
throw "Manual error";
} catch (err) {
console.log("Error caught:", err);
} finally {
console.log("Cleanup runs always");
}
}
doTask();
If an error occurs (or doesn’t), the finally block still executes.