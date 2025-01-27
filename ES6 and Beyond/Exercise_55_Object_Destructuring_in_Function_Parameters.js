// Exercise 55: Object Destructuring in Function Parameters

function printUser({ name, age }) {
console.log(`Name: ${name}, Age: ${age}`);
}
printUser({ name: "Kate", age: 28 });