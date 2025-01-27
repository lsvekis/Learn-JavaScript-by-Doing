// Exercise 77: Function Scope vs Block Scope

function scopeTest() {
if (true) {
var varInBlock = "Function scoped";
let letInBlock = "Block scoped";
}
console.log(varInBlock); // works
// console.log(letInBlock); // error
}
scopeTest();