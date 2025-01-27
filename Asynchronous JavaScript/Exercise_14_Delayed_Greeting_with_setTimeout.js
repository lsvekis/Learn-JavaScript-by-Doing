// Exercise 14: Delayed Greeting with setTimeout

function delayedGreet(name) {
setTimeout(() => {
console.log(`Hello after delay, ${name}!`);
}, 2000);
}
console.log("Before calling delayedGreet");
delayedGreet("Eve");
console.log("After calling delayedGreet");