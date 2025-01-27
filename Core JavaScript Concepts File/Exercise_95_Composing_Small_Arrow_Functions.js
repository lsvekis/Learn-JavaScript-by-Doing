// Exercise 95: Composing Small Arrow Functions

const add1 = (x) => x + 1;
const multiply2 = (x) => x * 2;
const composed = (x) => multiply2(add1(x));
console.log(composed(5)); // (5+1)*2 = 12
composed(5) calls add1(5) first, then multiply2(6).