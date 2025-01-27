// Exercise 4: Dynamic Scoping vs. Lexical Scoping

let x = 10;
function outer() {
let x = 20;
function inner() {
console.log(x);
}
return inner;
}
let fn = outer();
fn(); // 20, not 10
inner closes over x from outer (which is 20), ignoring the global x (10).