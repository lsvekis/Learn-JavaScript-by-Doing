// Exercise 59: Promise Chaining with a Rejection Midway

What You’ll Learn: If an error occurs, subsequent .then() steps are skipped.
Learning Objectives:
The chain jumps straight to .catch().
new Promise((resolve, reject) => resolve(10))
.then((val) => {
console.log("Step 1:", val);
throw "Something broke in Step 2";
})
.then((val) => {
console.log("Step 3 (won't run):", val);
})
.catch((err) => {
console.log("Caught error:", err);
});
The thrown error in .then() triggers the .catch() block.
Next .then() is skipped.