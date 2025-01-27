// Exercise 66: Composition Over Inheritance Example

function canFly(obj) {
obj.fly = function() {
console.log(obj.name + " is flying!");
};
return obj;
}
function createRobot(name) {
let robot = { name };
return robot;
}
let flyingRobot = canFly(createRobot("RoboBird"));
flyingRobot.fly(); // "RoboBird is flying!"
We define a function that adds fly() capability. This is composition rather than using class inheritance.