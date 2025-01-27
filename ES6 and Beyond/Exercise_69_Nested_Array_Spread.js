// Exercise 69: Nested Array Spread

let nested = [1, 2, [3, 4]];
let flat = [...nested, 5, 6];
console.log(flat); // [1, 2, [3, 4], 5, 6]