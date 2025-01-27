// Exercise 42: Adding Methods to a Prototype

function Person(name) {
this.name = name;
}
Person.prototype.sayHello = function() {
console.log("Hi, I'm " + this.name);
};
let p1 = new Person("Alice");
let p2 = new Person("Bob");
p1.sayHello(); // "Hi, I'm Alice"
p2.sayHello(); // "Hi, I'm Bob"