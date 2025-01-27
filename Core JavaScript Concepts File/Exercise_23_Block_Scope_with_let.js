// Exercise 23: Block Scope with let

if (true) {
let blockScoped = "Block scope!";
console.log(blockScoped);
}
// console.log(blockScoped); // Error
let is only accessible within the block (in this case, the if statement block).