// Exercise 28: Shadowing Variables

let value = "Global scope";
function shadowDemo() {
let value = "Local scope";
console.log("Inside function:", value);
}
shadowDemo();
console.log("Outside function:", value);