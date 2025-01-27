// Exercise 51: Catching Rejection with .catch()

Exercise 51: Catching Rejection with .catch()
What You’ll Learn: The more common pattern: .then() for success, .catch() for errors.
Learning Objectives:
let p = new Promise((resolve, reject) => {
setTimeout(() => {
reject("Network error");
}, 1000);
});
p.then((data) => {
console.log("This won't run, because we reject");
}).catch((err) => {
console.log("Caught error:", err);
});
.catch() is invoked if the promise is rejected.