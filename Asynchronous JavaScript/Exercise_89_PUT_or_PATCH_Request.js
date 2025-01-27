// Exercise 89: PUT or PATCH Request

fetch("https://jsonplaceholder.typicode.com/posts/1", {
headers: {
},
body: JSON.stringify({ title: "Updated Title", body: "Updated content" }),
})
.then((res) => res.json())
.then((data) => console.log("Updated post:", data));