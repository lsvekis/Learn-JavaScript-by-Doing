// Exercise 78: Rest Parameter with Default Values

function greet(greeting = "Hello", ...names) {
names.forEach(name => {
console.log(`${greeting}, ${name}!`);
});
}
greet("Hi", "Alice", "Bob");
greet(undefined, "Charlie");