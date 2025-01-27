// Exercise 31: Ternary Operators Inside Template Literals

let isMember = true;
let output = `Access: ${isMember ? "Granted" : "Denied"}`;
console.log(output);
${condition ? "A" : "B"} can embed a quick conditional result directly into the string.