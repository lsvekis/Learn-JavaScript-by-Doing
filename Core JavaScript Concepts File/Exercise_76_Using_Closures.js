// Exercise 76: Using Closures

function counter() {
let count = 0;
return function() {
count++;
return count;
};
}
let increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
count remains accessible to the inner function even after counter() finishes.