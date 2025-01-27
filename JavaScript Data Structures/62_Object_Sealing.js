// 62. Object Sealing

What You’ll Learn: Object.seal() to prevent adding/removing properties.
Learning Objectives:
let obj = { a: 1, b: 2 };
Object.seal(obj);
obj.c = 3; // Not allowed
obj.a = 10; // Allowed
console.log(obj);