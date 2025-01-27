// 98. Validating JSON with a Try-Catch

What You’ll Learn: Basic error handling for JSON.parse().
Learning Objectives:
function safeParse(jsonStr) {
try {
return JSON.parse(jsonStr);
} catch (e) {
console.error("Invalid JSON:", e.message);
return null;
}
}
let result = safeParse('{ invalid: }');
console.log(result); // null, with an error in console
Wrapping JSON.parse() in try...catch prevents the program from crashing on invalid input.