// 100. Final Integration: Array, Object, JSON

let data = [
{ id: 1, item: "Book", price: 10 },
{ id: 2, item: "Pen", price: 2 }
];
let jsonData = JSON.stringify(data);
console.log("JSON String:", jsonData);
let parsedData = JSON.parse(jsonData);
parsedData[0].price = 12; // modify
console.log("Parsed & Modified:", parsedData);
