// Exercise 48: Graceful Callback Termination

function maybeErrorTask(cb) {
let fail = Math.random() < 0.3;
if (fail) return cb("An error occurred");
setTimeout(() => cb(null, "Success!"), 300);
}
maybeErrorTask((err, result) => {
if (err) {
console.log("Stopped chain due to error:", err);
return;
}
console.log("Result:", result);
});