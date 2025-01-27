// Exercise 90: DELETE Request

fetch("https://jsonplaceholder.typicode.com/posts/1", {
})
.then((res) => {
if (!res.ok) {
throw new Error("Delete failed");
}
return res.text();
})
.then((resText) => console.log("Delete response:", resText))
.catch((err) => console.error(err));