// Exercise 92: Debugging in Composition with a Tap Function

function tap(fn) {
return (x) => {
fn(x);
return x;
};
}
function add2(n) { return n + 2; }
function multiply3(n) { return n * 3; }
let pipeline = pipeAll(add2, tap(console.log), multiply3);
console.log(pipeline(4));