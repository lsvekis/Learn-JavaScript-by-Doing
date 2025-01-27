// Exercise 40: Flattening with Named Callback Functions

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
function finalStep() {
console.log("All done (with named callbacks)!");
}
function runSteps() {
stepOne(() => stepTwo(finalStep));
}
runSteps();