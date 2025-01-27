// Exercise 71: Basic Pure Function

function pureAdd(a, b) {
return a + b; // no side effects, depends only on a, b
}
console.log(pureAdd(3, 4)); // 7
console.log(pureAdd(3, 4)); // 7 (always the same)