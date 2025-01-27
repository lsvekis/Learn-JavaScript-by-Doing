// Exercise 93: Dynamic Import with import()

Exercise 93: Dynamic Import with import()
Use the promise-based import() function.
export function greet(name) {
console.log(`Hello, ${name}!`);
}
async function loadGreet() {
const module = await import('./onDemand.js');
module.greet("Dynamic Import");
}
loadGreet();
import('./onDemand.js') returns a promise that resolves with the module exports.