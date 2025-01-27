// Exercise 33: Inserting Date/Time Dynamically

let now = new Date();
let formatted = `Today is ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
console.log(formatted);
Template literals can handle any object’s toString() or custom method to produce a string.