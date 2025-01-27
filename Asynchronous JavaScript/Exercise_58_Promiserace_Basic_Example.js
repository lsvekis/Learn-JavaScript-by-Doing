// Exercise 58: Promise.race() Basic Example

Exercise 58: Promise.race() Basic Example
What You’ll Learn: The first promise to settle (resolve or reject) decides the outcome.
Learning Objectives:
let slow = new Promise((resolve) => setTimeout(() => resolve("Slow"), 1000));
let fast = new Promise((resolve) => setTimeout(() => resolve("Fast"), 300));
Promise.race([slow, fast]).then((winner) => {
console.log("Race winner:", winner); // "Fast"
});