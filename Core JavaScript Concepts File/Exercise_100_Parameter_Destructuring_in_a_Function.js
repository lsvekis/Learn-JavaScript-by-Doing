// Exercise 100: Parameter Destructuring in a Function

function displayUser({ name, age }) {
console.log(`Name: ${name}, Age: ${age}`);
}
let userInfo = { name: "Eva", age: 28, city: "Berlin" };
displayUser(userInfo);
