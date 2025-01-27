// Exercise 55: Calling super in ES6 Classes

What You’ll Learn: Using super() to call the parent constructor.
Learning Objectives:
class Person {
constructor(name) {
this.name = name;
}
}
class Employee extends Person {
constructor(name, position) {
super(name); // call Person constructor
this.position = position;
}
}
let emp = new Employee("Bob", "Manager");
console.log(emp.name, emp.position); // "Bob" "Manager"
Employee calls super(name) to invoke Person’s constructor for the name property.
Subclasses must call super() before using this.