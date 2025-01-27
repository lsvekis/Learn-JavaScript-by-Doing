// Exercise 53: Default Values in Object Destructuring

Prevent undefined by using = value.
let product = { name: "Laptop" };
let { name, price = 999 } = product;
console.log(name, price); // Laptop 999