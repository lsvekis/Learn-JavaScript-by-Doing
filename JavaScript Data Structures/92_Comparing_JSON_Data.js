// 92. Comparing JSON Data

let objA = { x: 1, y: 2 };
let objB = { y: 2, x: 1 };
let strA = JSON.stringify(objA, Object.keys(objA).sort());
let strB = JSON.stringify(objB, Object.keys(objB).sort());
console.log(strA === strB); // true
Normal object comparison objA === objB fails unless references match.