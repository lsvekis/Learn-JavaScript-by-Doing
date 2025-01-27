// Exercise 5: Multiple Closures from the Same Factory

function createCounter() {
let count = 0;
return () => ++count;
}
let c1 = createCounter();
let c2 = createCounter();
console.log(c1()); // 1
console.log(c1()); // 2
console.log(c2()); // 1 (independent)