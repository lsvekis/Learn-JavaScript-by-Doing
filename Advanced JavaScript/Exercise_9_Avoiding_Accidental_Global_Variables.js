// Exercise 9: Avoiding Accidental Global Variables

(function() {
let privateVar = 42;
console.log("privateVar inside IIFE:", privateVar);
})();
// console.log(privateVar); // ReferenceError: not defined
This IIFE (Immediately Invoked Function Expression) creates a scope for privateVar.