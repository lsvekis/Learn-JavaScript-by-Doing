// Exercise 86: Simple Composition of Two Functions

What You’ll Learn: The concept of f(g(x)).
Learning Objectives:
function compose(f, g) {
return function(x) {
return f(g(x));
};
}
let add1 = (n) => n + 1;
let square = (n) => n * n;
let add1ThenSquare = compose(square, add1);
console.log(add1ThenSquare(2)); // (2+1)^2 = 9
compose(square, add1) yields a function that first applies add1, then square.