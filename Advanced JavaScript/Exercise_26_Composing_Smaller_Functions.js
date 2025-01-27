// Exercise 26: Composing Smaller Functions

function compose(f, g) {
return function(x) {
return f(g(x));
};
}
function add2(n) { return n + 2; }
function multiply3(n) { return n * 3; }
let add2ThenMultiply3 = compose(multiply3, add2);
console.log(add2ThenMultiply3(5)); // (5+2)*3 = 21