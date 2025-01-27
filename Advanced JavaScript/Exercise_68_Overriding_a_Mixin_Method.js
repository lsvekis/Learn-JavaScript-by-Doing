// Exercise 68: Overriding a Mixin Method

let eaterMixin = {
eat() {
console.log(this.name + " is eating");
}
};
class Animal {
constructor(name) {
this.name = name;
}
}
Object.assign(Animal.prototype, eaterMixin);
class Snake extends Animal {
eat() {
console.log(this.name + " swallows its food whole!");
}
}
let a = new Animal("GenericAnimal");
a.eat(); // "GenericAnimal is eating"
let s = new Snake("Python");
s.eat(); // "Python swallows its food whole!"
After applying the mixin, Animal has an eat() method.
Snake extends Animal but overrides eat() with specialized behavior.