// Exercise 43: Checking Own Property vs. Prototype Property

function Car(model) {
this.model = model;
}
Car.prototype.wheels = 4;
let c = new Car("Sedan");
console.log(c.hasOwnProperty("model"));   // true
console.log(c.hasOwnProperty("wheels"));  // false (in prototype)
console.log("wheels" in c);               // true