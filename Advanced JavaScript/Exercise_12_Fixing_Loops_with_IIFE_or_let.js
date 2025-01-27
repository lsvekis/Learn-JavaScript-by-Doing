// Exercise 12: Fixing Loops with IIFE or let

for (let i = 1; i <= 3; i++) {
setTimeout(function() {
console.log("i =", i);
}, 100);
}
// Output: i=1, i=2, i=3