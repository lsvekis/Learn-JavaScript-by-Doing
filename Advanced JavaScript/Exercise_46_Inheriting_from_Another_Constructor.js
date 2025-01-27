// Exercise 46: Inheriting from Another Constructor

What You’ll Learn: Basic constructor inheritance pattern (pre-ES6).
Learning Objectives:
function Animal(name) {
this.name = name;
}
Animal.prototype.speak = function() {
console.log(this.name + " makes a noise");
};
function Dog(name, breed) {
Animal.call(this, name); // call parent constructor
this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype); // inherit
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function() {
console.log(this.name + " barks");
};
let d = new Dog("Rex", "Labrador");
d.speak(); // "Rex barks"
Animal.call(this, name) sets Animal properties in the child.
Dog.prototype = Object.create(Animal.prototype) for inheritance.
Then Dog.prototype.constructor = Dog fixes the constructor reference.