// Exercise 56: Overriding Methods and Using super in a Method

Use super.methodName() to invoke the parent version.
class Person {
greet() {
console.log("Hello from Person");
}
}
class Student extends Person {
greet() {
super.greet();
console.log("Hello from Student");
}
}
let s = new Student();
s.greet();
We override greet() in Student, but call the parent’s method via super.greet() first.