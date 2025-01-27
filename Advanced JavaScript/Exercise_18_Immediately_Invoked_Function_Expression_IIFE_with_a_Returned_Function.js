// Exercise 18: Immediately Invoked Function Expression (IIFE) with a Returned Function

Exercise 18: Immediately Invoked Function Expression (IIFE) with a Returned Function
let greeter = (function(name) {
let greeting = "Hello, " + name;
return function() {
console.log(greeting);
};
})("John");
greeter(); // "Hello, John"