// Exercise 53: Promise Chaining with Async Operations

What You’ll Learn: Each .then() can return another promise.
Learning Objectives:
function asyncAdd(x, y) {
return new Promise((resolve) => {
setTimeout(() => resolve(x + y), 500);
});
}
asyncAdd(2, 3)
.then((sum) => {
console.log("Sum 1:", sum);
return asyncAdd(sum, 5);
})
.then((newSum) => {
console.log("Sum 2:", newSum);
});
The second .then() only executes after the first promise is resolved.