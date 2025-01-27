// Exercise 39: Callback Inside a Callback (Nesting)

Exercise 39: Callback Inside a Callback (Nesting)
function stepOne(cb) {
setTimeout(() => {
console.log("Step 1 done");
cb();
}, 300);
}
function stepTwo(cb) {
setTimeout(() => {
console.log("Step 2 done");
cb();
}, 200);
}
stepOne(() => {
stepTwo(() => {
console.log("All steps done (nested callbacks)");
});
});