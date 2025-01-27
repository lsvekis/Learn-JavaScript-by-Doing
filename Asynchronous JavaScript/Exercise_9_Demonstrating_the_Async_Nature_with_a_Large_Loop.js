// Exercise 9: Demonstrating the Async Nature with a Large Loop

setTimeout(() => console.log("Timeout finished"), 0);
let sum = 0;
for (let i = 0; i < 1e7; i++) {
sum += i;
}
console.log("Loop done, sum =", sum);
Even setTimeout(..., 0) is not immediate.