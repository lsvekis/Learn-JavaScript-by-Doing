// Exercise 85: Basic GET Request with fetch()

Exercise 85: Basic GET Request with fetch()
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((data) => console.log("Fetched post:", data))
.catch((err) => console.error("Fetch error:", err));
We call fetch() to get a JSON resource.
The first .then() converts the response to JSON, the second logs the data.
.catch() handles any network or parse errors.