// Exercise 13: Partial Application Using a Closure

function partialAdd(a) {
return function(b) {
return a + b;
};
}
let addFive = partialAdd(5);
console.log(addFive(10)); // 15