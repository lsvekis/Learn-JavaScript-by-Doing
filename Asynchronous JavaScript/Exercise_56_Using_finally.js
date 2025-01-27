// Exercise 56: Using finally()

Exercise 56: Using finally()
What You’ll Learn: The .finally() method for cleanup.
Learning Objectives:
.finally() runs regardless of success or failure.
new Promise((resolve, reject) => {
let success = Math.random() > 0.5;
if (success) resolve("OK");
else reject("Not OK");
})
.then((val) => {
console.log("Resolved with:", val);
})
.catch((err) => {
console.log("Rejected with:", err);
})
.finally(() => {
console.log("Always runs for cleanup");
});
.finally() is called after .then() or .catch().