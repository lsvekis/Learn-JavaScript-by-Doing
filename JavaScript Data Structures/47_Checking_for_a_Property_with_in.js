// 47. Checking for a Property with in

let obj = { a: 1, b: 2 };
console.log("a" in obj); // true
console.log("c" in obj); // false
"a" in obj returns true if obj has an own (or inherited) property named "a".