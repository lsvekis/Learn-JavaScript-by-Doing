// Exercise 52: Class Expressions

const Car = class {
constructor(model) {
this.model = model;
}
drive() {
console.log(this.model + " is driving");
}
};
let c = new Car("Tesla");
c.drive(); // "Tesla is driving"