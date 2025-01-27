// Exercise 85: Polymorphic Function Usage (Manual Overloading)

Exercise 85: Polymorphic Function Usage (Manual Overloading)
function describe(input) {
if (typeof input === "string") {
console.log("String:", input.toUpperCase());
} else if (typeof input === "number") {
console.log("Number squared:", input * input);
} else {
console.log("Unsupported type");
}
}
describe("hello");
describe(5);
describe(true);