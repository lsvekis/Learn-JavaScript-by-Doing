// Exercise 11: Loops and Closures Pitfall

for (var i = 1; i <= 3; i++) {
setTimeout(function() {
console.log("i =", i);
}, 100);
}
// Output: "i=4" three times
Because var is function-scoped, each callback sees the final value of i (which is 4 after the loop ends).