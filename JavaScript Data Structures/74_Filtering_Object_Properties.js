// 74. Filtering Object Properties

let obj = { a: 1, b: 2, c: 3 };
let filtered = {};
for (let key in obj) {
if (obj[key] > 1) {
filtered[key] = obj[key];
}
}
console.log(filtered);