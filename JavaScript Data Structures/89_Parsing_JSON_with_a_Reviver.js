// 89. Parsing JSON with a Reviver

What You’ll Learn: Transform values during JSON.parse().
Learning Objectives:
let jsonData = '{"date":"2025-01-01","score":"42"}';
function reviver(key, value) {
if (key === "date") return new Date(value);
if (key === "score") return Number(value);
return value;
}
let parsedObj = JSON.parse(jsonData, reviver);
console.log(parsedObj.date instanceof Date, parsedObj.score);