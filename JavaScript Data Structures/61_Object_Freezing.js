// 61. Object Freezing

What You’ll Learn: Object.freeze() to prevent modifications.
Learning Objectives:
let person = { name: "Alice" };
Object.freeze(person);
person.age = 30; // silently ignored in strict mode or throws error in strict
console.log(person);