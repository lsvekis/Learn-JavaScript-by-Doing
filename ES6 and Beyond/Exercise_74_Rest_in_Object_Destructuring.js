// Exercise 74: Rest in Object Destructuring

let point = { x: 10, y: 20, z: 30 };
let { x, ...coords } = point;
console.log(x);       // 10
console.log(coords);  // { y: 20, z: 30 }
x is singled out, and the rest (y, z) are captured in coords.