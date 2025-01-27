// Exercise 63: Copying an Object with Spread

let obj1 = { name: "Alice", age: 25 };
let obj2 = { ...obj1 };
obj2.age = 26;
console.log(obj1.age); // 25
console.log(obj2.age); // 26
{ ...obj1 } spreads the properties of obj1 into a new object.