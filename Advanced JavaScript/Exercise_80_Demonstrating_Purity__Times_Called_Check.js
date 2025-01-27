// Exercise 80: Demonstrating Purity – Times Called Check

let callCount = 0;
function addImpure(a, b) {
callCount++;
return a + b;
}