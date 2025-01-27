// 73. Renaming Object Keys

let user = { firstName: "John", age: 30 };
user.lastName = user.firstName;
delete user.firstName;
console.log(user);