// Exercise 58: Destructuring an Array of Objects

let users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" }
];
let [{ name: firstName }, { name: secondName }] = users;
console.log(firstName, secondName);