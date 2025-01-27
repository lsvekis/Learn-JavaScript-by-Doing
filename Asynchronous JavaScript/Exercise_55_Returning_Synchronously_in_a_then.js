// Exercise 55: Returning Synchronously in a .then()

Exercise 55: Returning Synchronously in a .then()
What You’ll Learn: A .then() can return either a promise or a direct value.
Learning Objectives:
If we return a direct value, it becomes the resolved value of that .then().
Promise.resolve(10)
.then((x) => {
console.log("Got x:", x);
return x * 2; // returning a direct value
})
.then((y) => {
console.log("Got y:", y); // y = 20
});
A direct return is automatically wrapped in a resolved promise for the next .then().