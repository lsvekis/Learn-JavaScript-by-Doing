// Exercise 63: Error Handling with try/catch

Use try...catch to handle rejections instead of .catch().
function maybeReject() {
return new Promise((resolve, reject) => {
let fail = Math.random() < 0.5;
if (fail) reject("Random failure");
else resolve("Success");
});
}
async function run() {
try {
let val = await maybeReject();
console.log("Value:", val);
} catch (err) {
console.log("Caught error:", err);
}
}
run();