// Exercise 62: Inheritance Review

class Vehicle {
constructor(brand) {
this.brand = brand;
}
start() {
console.log(this.brand + " is starting...");
}
}
class Motorcycle extends Vehicle {
start() {
super.start();
console.log("Motorcycle engine revving...");
}
}
let m = new Motorcycle("Yamaha");
m.start();