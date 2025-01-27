// Exercise 91: Simple Function Composition

function add2(x) {
return x + 2;
}
function times3(x) {
return x * 3;
}
let result = times3(add2(5));
console.log(result); // (5+2)*3 = 21
The result of add2(5) is passed into times3.