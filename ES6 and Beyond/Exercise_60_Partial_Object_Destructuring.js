// Exercise 60: Partial Object Destructuring

let car = { brand: "Toyota", model: "Camry", year: 2021 };
let { model } = car;
console.log(model);  // "Camry"
We only destructured the model property from car; brand and year remain unused.