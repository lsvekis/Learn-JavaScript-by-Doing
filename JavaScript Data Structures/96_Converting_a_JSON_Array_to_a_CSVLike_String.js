// 96. Converting a JSON Array to a CSV-Like String

let employees = [
{ name: "Alice", age: 30 },
{ name: "Bob", age: 25 }
];
let header = "name,age";
let rows = employees.map(e => `${e.name},${e.age}`).join("\n");
let csv = header + "\n" + rows;
console.log(csv);