// Exercise 51: Simple Class Declaration

class Person {
constructor(name) {
this.name = name;
}
greet() {
console.log("Hello, I'm " + this.name);
}
}
let p = new Person("Alice");
p.greet(); // "Hello, I'm Alice"
The constructor method is invoked by new Person(...).