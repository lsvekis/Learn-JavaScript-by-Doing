// Exercise 29: Strict Mode Effect on Variables

"use strict";
function strictExample() {
// x = 10; // Error in strict mode (uncomment to see)
let x = 10;
console.log(x);
}
strictExample();