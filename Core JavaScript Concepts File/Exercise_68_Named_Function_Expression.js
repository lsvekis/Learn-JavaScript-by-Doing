// Exercise 68: Named Function Expression

let namedFuncExpr = function example() {
console.log("I have a name, but I'm still assigned to a variable!");
};
namedFuncExpr();
// example(); // Error: example is not defined outside
The function’s internal name (example) is only recognized inside the function or for debugging.