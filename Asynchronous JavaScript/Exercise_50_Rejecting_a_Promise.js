// Exercise 50: Rejecting a Promise

Distinguish success (resolve) from failure (reject).
let p = new Promise((resolve, reject) => {
let fail = Math.random() < 0.5;
if (fail) {
reject("Something went wrong");
} else {
resolve("Everything is okay");
}
});
p.then(
(val) => console.log("Fulfilled:", val),
(err) => console.log("Rejected:", err)
);