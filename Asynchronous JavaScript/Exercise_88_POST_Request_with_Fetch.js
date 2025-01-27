// Exercise 88: POST Request with Fetch

fetch("https://jsonplaceholder.typicode.com/posts", {
headers: {
},
body: JSON.stringify({ title: "New Post", body: "Post content" }),
})
.then((res) => res.json())
.then((data) => console.log("Posted:", data))
.catch((err) => console.error("Error:", err));