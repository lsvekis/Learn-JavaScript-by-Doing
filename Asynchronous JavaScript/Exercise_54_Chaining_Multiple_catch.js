// Exercise 54: Chaining Multiple catch()

Exercise 54: Chaining Multiple catch()
Show how an error in a chain can skip to a .catch().
new Promise((resolve, reject) => {
setTimeout(() => reject("First error"), 300);
})
.then((res) => {
console.log("This won't run");
})
.catch((err) => {
console.log("Caught:", err);
throw "Another error";
})
.catch((err) => {
console.log("Second catch:", err);
});
The first reject triggers the first .catch().
Because we re-throw, it triggers the second .catch() in the chain.