// 84. Converting JSON String to Object (JSON.parse())

84. Converting JSON String to Object (JSON.parse())
let data = '{"name":"Diana","age":22}';
let parsed = JSON.parse(data);
console.log(parsed.name, parsed.age);
JSON.parse() transforms the JSON string back into a JavaScript object.