// Exercise 99: Combining Recursion with Ternary Operator

function pow(base, exponent) {
return exponent === 0 ? 1 : base * pow(base, exponent - 1);
}
console.log(pow(2, 3)); // 8
If exponent is 0, return 1. Otherwise multiply base by pow(base, exponent - 1).