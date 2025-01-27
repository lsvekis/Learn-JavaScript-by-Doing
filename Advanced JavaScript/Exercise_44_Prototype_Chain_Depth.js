// Exercise 44: Prototype Chain Depth

let root = { rootProp: 1 };
let middle = Object.create(root);
middle.midProp = 2;
let child = Object.create(middle);
child.childProp = 3;
console.log(child.rootProp); // 1 (found in root)
console.log(Object.getPrototypeOf(child) === middle); // true
console.log(Object.getPrototypeOf(middle) === root);  // true