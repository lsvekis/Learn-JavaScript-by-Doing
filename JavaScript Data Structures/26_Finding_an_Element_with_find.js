// 26. Finding an Element with find()

26. Finding an Element with find()
let users = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
];
let result = users.find(user => user.age === 30);
console.log(result);
find() returns the first element satisfying the condition.