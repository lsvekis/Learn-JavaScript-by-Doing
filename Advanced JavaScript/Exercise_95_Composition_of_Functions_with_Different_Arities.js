// Exercise 95: Composition of Functions with Different Arities

function partial(fn, ...preset) {
return (...later) => fn(...preset, ...later);
}
function add(a, b, c) {
return a + b + c;
}
let add5 = partial(add, 5);
console.log(add5(3, 2)); // 10