// Exercise 98: Reusable curry for Any Number of Arguments

function curry(fn) {
return function curried(...args) {
if (args.length >= fn.length) {
return fn(...args);
} else {
return (...moreArgs) => curried(...args, ...moreArgs);
}
};
}
function add(a, b, c) {
return a + b + c;
}
let cAdd = curry(add);
console.log(cAdd(1)(2)(3)); // 6
console.log(cAdd(1, 2)(3)); // 6