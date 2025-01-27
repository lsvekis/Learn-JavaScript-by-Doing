// Exercise 67: Mixins for Polymorphic Behavior

let moverMixin = {
move() { console.log(this.name + " moves"); }
};
let shooterMixin = {
shoot() { console.log(this.name + " shoots"); }
};
class Robot {
constructor(name) {
this.name = name;
}
}
Object.assign(Robot.prototype, moverMixin, shooterMixin);
let r = new Robot("R2D2");
r.move();
r.shoot();