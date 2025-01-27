// Exercise 31: Non-Blocking File Reading (Node.js Concept)

Exercise 31: Non-Blocking File Reading (Node.js Concept)
// Node.js style example (conceptual)
const fs = require("fs");
console.log("Request file read");
fs.readFile("someFile.txt", "utf-8", (err, data) => {
if (err) throw err;
console.log("File content:", data);
});
console.log("Other tasks can proceed");