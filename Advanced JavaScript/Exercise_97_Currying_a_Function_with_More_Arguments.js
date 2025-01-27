// Exercise 97: Currying a Function with More Arguments

What You’ll Learn: Extending the idea to f(a, b, c) -> f(a)(b)(c).
Learning Objectives:
function curry3(fn) {
return function(a) {
return function(b) {
return function(c) {
return fn(a, b, c);
};
};
};
}
function sum3(a, b, c) {
return a + b + c;
}
let curriedSum3 = curry3(sum3);
console.log(curriedSum3(1)(2)(3)); // 6
The final call runs fn(a, b, c).