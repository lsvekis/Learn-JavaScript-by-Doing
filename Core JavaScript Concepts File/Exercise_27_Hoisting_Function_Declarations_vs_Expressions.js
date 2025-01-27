// Exercise 27: Hoisting Function Declarations vs. Expressions

hoistedFunction(); // Works
function hoistedFunction() {
console.log("I am a function declaration!");
}
// notHoisted(); // Error: notHoisted is not a function
var notHoisted = function() {
console.log("I am a function expression!");
};
Function expressions are treated like variables and only the variable is hoisted (with undefined).