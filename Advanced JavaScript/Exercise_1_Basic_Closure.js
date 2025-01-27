// Exercise 1: Basic Closure

function makeCounter() {
let count = 0;
return function() {
count++;
console.log(count);
};
}
let counter = makeCounter();
counter(); // 1
counter(); // 2