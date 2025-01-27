// Exercise 99: Race Condition Example

let sharedData = null;
setTimeout(() => {
sharedData = { info: "I'm set first" };
console.log("First setTimeout done");
}, Math.random() * 1000);
setTimeout(() => {
if (!sharedData) {
console.log("Second got there first, no data found!");
} else {
console.log("Second sees sharedData:", sharedData);
}
}, Math.random() * 1000);