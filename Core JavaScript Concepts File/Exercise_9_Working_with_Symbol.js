// Exercise 9: Working with Symbol

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false
console.log(sym1.description);