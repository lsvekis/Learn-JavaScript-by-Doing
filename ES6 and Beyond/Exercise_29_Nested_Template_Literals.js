// Exercise 29: Nested Template Literals

let greet = (name) => `Hello, ${name}!`;
let person = "Sarah";
let fullMessage = `Message: ${greet(`${person} (visitor)`)}`;
console.log(fullMessage);