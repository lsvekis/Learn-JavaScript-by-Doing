// Exercise 72: Impure Function Example

let external = 0;
function impureAdd(a) {
external += a;
return external;
}
console.log(impureAdd(5)); // 5
console.log(impureAdd(5)); // 10 (different result for same input)
Same input (5) leads to different outputs over time, thus impure.