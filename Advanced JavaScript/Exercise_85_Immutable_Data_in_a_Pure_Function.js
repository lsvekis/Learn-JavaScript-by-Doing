// Exercise 85: Immutable Data in a Pure Function

function addFriend(user, friend) {
return {
};
}
let u = { name: "Jane", friends: ["Mike"] };
let u2 = addFriend(u, "Sara");
console.log(u.friends);  // ["Mike"]
console.log(u2.friends); // ["Mike", "Sara"]