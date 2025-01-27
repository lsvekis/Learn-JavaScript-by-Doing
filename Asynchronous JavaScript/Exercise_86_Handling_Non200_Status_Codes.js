// Exercise 86: Handling Non-200 Status Codes

Realize fetch won’t throw automatically for HTTP errors; we must handle them.
fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
.then((response) => {
if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}
return response.json();
})
.then((data) => console.log("Data:", data))
.catch((err) => console.error("Caught:", err.message));
This error is caught in .catch().