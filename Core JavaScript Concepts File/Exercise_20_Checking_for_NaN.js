// Exercise 20: Checking for NaN

Use isNaN() to detect NaN.
let invalidNumber = Number("abc");
console.log(invalidNumber); // NaN
console.log(isNaN(invalidNumber)); // true
console.log(isNaN(123));           // false
isNaN() checks if a value is NaN.