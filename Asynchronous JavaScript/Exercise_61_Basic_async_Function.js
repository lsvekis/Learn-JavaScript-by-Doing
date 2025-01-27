// Exercise 61: Basic async Function

async function greet(name) {
return `Hello, ${name}`;
}
greet("Alice").then((val) => console.log(val));
We can .then() or use await.