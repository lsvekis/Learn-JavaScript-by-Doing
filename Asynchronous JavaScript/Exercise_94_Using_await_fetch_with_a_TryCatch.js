// Exercise 94: Using await fetch with a Try/Catch

async function getUsers() {
try {
let response = await fetch("https://jsonplaceholder.typicode.com/users");
if (!response.ok) {
throw new Error(`HTTP Error: ${response.status}`);
}
let users = await response.json();
console.log("Got users:", users);
} catch (err) {
console.error("Fetch error:", err);
}
}
getUsers();