// Exercise 27: Combining Template Literal with Regular Strings

let name = "Alice";
let combined = "Welcome " + name + `, today is ${new Date().toDateString()}`;
console.log(combined);