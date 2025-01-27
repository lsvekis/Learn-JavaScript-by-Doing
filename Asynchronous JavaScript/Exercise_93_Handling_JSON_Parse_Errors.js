// Exercise 93: Handling JSON Parse Errors

What You’ll Learn: If the response isn’t valid JSON, .json() might fail.
Learning Objectives:
fetch("https://jsonplaceholder.typicode.com/not-json-endpoint")
.then((res) => {
if (!res.ok) throw new Error("Network error");
return res.json();
})
.then((data) => console.log("JSON data:", data))
.catch((err) => console.error("Could be network or parse error:", err));
If the endpoint returns invalid JSON, .json() throws, so .catch() is triggered.