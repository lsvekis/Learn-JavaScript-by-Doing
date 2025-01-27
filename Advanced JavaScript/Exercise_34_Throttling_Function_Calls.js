// Exercise 34: Throttling Function Calls

function throttle(fn, delay) {
let lastCall = 0;
return function(...args) {
let now = Date.now();
if (now - lastCall >= delay) {
lastCall = now;
fn(...args);
}
};
}
let throttledLog = throttle((msg) => console.log(msg), 1000);
setInterval(() => throttledLog("Hello"), 100);