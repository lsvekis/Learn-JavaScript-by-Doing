// Exercise 87: Using Async/Await with Fetch

async function getPost(id) {
try {
let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
if (!response.ok) {
throw new Error(`Error: ${response.status}`);
}
let data = await response.json();
console.log("Post data:", data);
} catch (err) {
console.error("Fetch error:", err.message);
}
}
getPost(2);
We await fetch(), then check the ok property, then await the .json() result, all in a try/catch block.