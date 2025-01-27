// Exercise 82: Immutability with Objects

function updateUser(user, newName) {
return { ...user, name: newName };
}
let user = { name: "Alice", age: 25 };
let updatedUser = updateUser(user, "Bob");
console.log(user);        // { name: "Alice", age: 25 }
console.log(updatedUser); // { name: "Bob", age: 25 }