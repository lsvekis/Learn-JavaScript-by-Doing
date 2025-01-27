// Exercise 70: Higher-Order Function Example

function higherOrder(fn) {
fn();
}
function hello() {
console.log("Hello from callback!");
}
higherOrder(hello);