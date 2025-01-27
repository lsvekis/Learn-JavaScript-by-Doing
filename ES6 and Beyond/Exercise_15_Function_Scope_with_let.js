// Exercise 15: Function Scope with let

function testFuncScope() {
let outer = "outer";
if (true) {
let inner = "inner";
console.log(outer, inner);
}
// console.log(inner); // Error, block-scoped
}
testFuncScope();