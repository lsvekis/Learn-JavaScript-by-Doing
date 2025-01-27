// Exercise 59: Destructuring Multiple Objects

let user1 = { name: "Carol", age: 40 };
let user2 = { name: "Dan", age: 35 };
let { name: n1, age: a1 } = user1;
let { name: n2, age: a2 } = user2;
console.log(n1, a1);
console.log(n2, a2);