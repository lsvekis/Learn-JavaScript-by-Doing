// Exercise 82: Using apply() Method

Exercise 82: Using apply() Method
What You’ll Learn: Similar to call(), but arguments are in an array.
Learning Objectives:
function sum(a, b, c) {
console.log(`Sum: ${a + b + c}, this.name: ${this.name}`);
}
let contextObj = { name: "Calculator" };
sum.apply(contextObj, [2, 3, 4]);
apply(context, arrayOfArgs) calls the function with this = context and arguments from the array.