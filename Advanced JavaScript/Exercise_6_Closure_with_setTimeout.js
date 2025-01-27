// Exercise 6: Closure with setTimeout

function delayedLogger(msg, delay) {
setTimeout(() => {
console.log("Logged after " + delay + "ms:", msg);
}, delay);
}
delayedLogger("Hello", 1000);