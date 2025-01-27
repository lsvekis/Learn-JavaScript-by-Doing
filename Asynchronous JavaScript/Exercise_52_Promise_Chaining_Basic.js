// Exercise 52: Promise Chaining (Basic)

Exercise 52: Promise Chaining (Basic)
What You’ll Learn: Return a value from .then() to chain another .then().
Learning Objectives:
Understand how each .then() can pass data to the next.
new Promise((resolve) => {
resolve(2);
})
.then((num) => {
console.log("First then:", num);
return num * 2;
})
.then((doubleNum) => {
console.log("Second then:", doubleNum);
});
The first .then() returns num * 2, which becomes the input to the second .then().