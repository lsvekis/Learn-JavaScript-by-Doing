// 48. Looping Through Object Keys with for...in

Access each property name (and value) in a loop.
let book = { title: "1984", author: "Orwell", year: 1949 };
for (let key in book) {
console.log(key, book[key]);
}