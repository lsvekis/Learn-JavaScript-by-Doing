// 57. Shorthand Method Declaration

let car = {
start() {
console.log(`Starting ${this.brand}`);
}
};
car.start();
start() is a shorthand for start: function() { ... }.