// 50. Merging Objects with Object.assign()

50. Merging Objects with Object.assign()
let target = { a: 1 };
let source = { b: 2 };
let merged = Object.assign({}, target, source);
console.log(merged);
Object.assign({}, target, source) merges properties from target and source into a new object.