// Exercise 49: Creating a Basic Promise

What You’ll Learn: new Promise(...) constructor.
Learning Objectives:
let p = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Promise resolved data");
}, 1000);
});
p.then((data) => console.log("Then received:", data));