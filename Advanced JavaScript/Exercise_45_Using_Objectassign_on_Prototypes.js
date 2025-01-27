// Exercise 45: Using Object.assign on Prototypes

function Shape(name) {
this.name = name;
}
Object.assign(Shape.prototype, {
getName() {
return this.name;
},
setName(newName) {
this.name = newName;
}
});
let circle = new Shape("Circle");
console.log(circle.getName()); // "Circle"
circle.setName("Oval");
console.log(circle.getName()); // "Oval"