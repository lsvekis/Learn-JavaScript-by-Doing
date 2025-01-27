// Exercise 21: Global vs Local Scope

var globalVar = "I'm global";
function testScope() {
var localVar = "I'm local";
console.log(globalVar);  // accessible
console.log(localVar);   // accessible inside function
}
testScope();
// console.log(localVar); // Error: localVar is not defined
localVar is accessible only inside testScope().