// 85. Attempting to Parse Invalid JSON

let invalidData = "{name:'Eve',age:25}"; // invalid JSON, missing quotes
try {
let result = JSON.parse(invalidData);
} catch (e) {
console.error("JSON parse error:", e.message);
}
JSON.parse() throws a SyntaxError if the string is invalid.