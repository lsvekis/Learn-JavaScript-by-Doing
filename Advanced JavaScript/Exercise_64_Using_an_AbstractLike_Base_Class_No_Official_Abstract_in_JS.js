// Exercise 64: Using an Abstract-Like Base Class (No Official Abstract in JS)

Exercise 64: Using an Abstract-Like Base Class (No Official Abstract in JS)
class Animal {
speak() {
throw new Error("speak() must be implemented by subclass");
}
}
class Cat extends Animal {
speak() {
console.log("Meow");
}
}
let kitty = new Cat();
kitty.speak(); // "Meow"
// let randomAnimal = new Animal();
// randomAnimal.speak(); // Error