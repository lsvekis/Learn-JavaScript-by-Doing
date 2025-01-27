// Exercise 96: Basic Currying Example

function curryAdd(a) {
return function(b) {
return a + b;
};
}
let add10 = curryAdd(10);
console.log(add10(5)); // 15
curryAdd(a) returns a function that takes b.