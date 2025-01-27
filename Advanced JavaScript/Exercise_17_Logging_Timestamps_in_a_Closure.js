// Exercise 17: Logging Timestamps in a Closure

function createLogger() {
let logs = [];
return function() {
let now = new Date();
logs.push(now.toISOString());
console.log(logs);
};
}
let logger = createLogger();
logger(); // Logs array with 1 timestamp
logger(); // Logs array with 2 timestamps
The logs array is captured by the closure, persisting across calls to logger().