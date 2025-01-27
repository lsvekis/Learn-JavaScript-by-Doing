// Exercise 21: Basic Higher-Order Function

function greet(fn) {
fn("Hello from greet!");
}
greet((msg) => console.log(msg));