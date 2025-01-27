// Exercise 63: Polymorphism with Method Overriding

class Shape {
draw() {
console.log("Drawing a generic shape");
}
}
class Circle extends Shape {
draw() {
console.log("Drawing a circle");
}
}
class Square extends Shape {
draw() {
console.log("Drawing a square");
}
}
let shapes = [new Circle(), new Square()];
shapes.forEach((s) => s.draw());
Polymorphism: calling draw() on each shape instance results in different behavior.