// Exercise 83: Deep Immutability for Nested Structures

function deepCopy(obj) {
if (obj === null || typeof obj !== "object") return obj;
if (Array.isArray(obj)) {
return obj.map(deepCopy);
}
let copy = {};
for (let key in obj) {
copy[key] = deepCopy(obj[key]);
}
return copy;
}
let nested = { a: 1, b: { c: 2 } };
let copy = deepCopy(nested);
copy.b.c = 99;
console.log(nested.b.c); // still 2
console.log(copy.b.c);   // 99