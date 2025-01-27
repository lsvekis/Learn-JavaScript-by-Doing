// Exercise 57: Promise.all() Basic Example

Exercise 57: Promise.all() Basic Example
let p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 300));
let p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 200));
Promise.all([p1, p2]).then((values) => {
console.log("Promise.all results:", values); // ["A", "B"]
});
We only get .then() once all included promises have resolved.