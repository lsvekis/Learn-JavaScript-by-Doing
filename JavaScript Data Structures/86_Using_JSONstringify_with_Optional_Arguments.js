// 86. Using JSON.stringify with Optional Arguments

let obj = { name: "Frank", age: 30 };
let pretty = JSON.stringify(obj, null, 2);
console.log(pretty);
The third parameter in JSON.stringify() controls indentation, making JSON output more human-readable.