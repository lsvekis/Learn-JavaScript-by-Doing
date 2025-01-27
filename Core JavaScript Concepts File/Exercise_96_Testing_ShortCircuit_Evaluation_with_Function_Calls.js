// Exercise 96: Testing Short-Circuit Evaluation with Function Calls

function logAndReturnTrue() {
console.log("logAndReturnTrue called");
return true;
}
console.log(false && logAndReturnTrue()); // logAndReturnTrue not called
console.log(true || logAndReturnTrue());  // logAndReturnTrue not called