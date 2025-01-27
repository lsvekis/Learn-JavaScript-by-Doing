// Exercise 96: Using JSON as Request Body with fetch (Async/Await)

Exercise 96: Using JSON as Request Body with fetch (Async/Await)
async function createPost(postData) {
let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
headers: { "Content-Type": "application/json" },
body: JSON.stringify(postData),
});
let data = await response.json();
console.log("Created post:", data);
}
createPost({ title: "Hello", body: "World" });
Section 9: Advanced/Wrap-Up Exercises (97–100)