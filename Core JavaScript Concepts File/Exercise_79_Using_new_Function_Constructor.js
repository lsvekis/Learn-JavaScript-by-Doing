// Exercise 79: Using new Function() Constructor

Exercise 79: Using new Function() Constructor
let sumFunc = new Function("a", "b", "return a + b;");
console.log(sumFunc(3, 4));
new Function(arg1, arg2, bodyString) creates a function at runtime.