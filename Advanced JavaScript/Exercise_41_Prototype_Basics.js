// Exercise 41: Prototype Basics

let parentObj = { greeting: "Hello" };
let childObj = Object.create(parentObj);
console.log(childObj.greeting); // "Hello" (inherited from parentObj)
Object.create(parentObj) sets childObj’s prototype to parentObj.