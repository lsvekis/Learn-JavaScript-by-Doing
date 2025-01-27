// 83. Converting a JavaScript Object to JSON (JSON.stringify())

83. Converting a JavaScript Object to JSON (JSON.stringify())
let user = { name: "Charlie", age: 30 };
let jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Charlie","age":30}'
JSON.stringify() returns a JSON-formatted string of the object.