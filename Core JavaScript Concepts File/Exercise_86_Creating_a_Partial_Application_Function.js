// Exercise 86: Creating a Partial Application Function

function partialAdd(a) {
return function(b) {
return a + b;
};
}
let addFive = partialAdd(5);
console.log(addFive(10)); // 15
partialAdd(5) returns a new function with a fixed at 5.