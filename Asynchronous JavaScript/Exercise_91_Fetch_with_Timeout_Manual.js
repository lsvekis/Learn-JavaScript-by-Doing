// Exercise 91: Fetch with Timeout (Manual)

Exercise 91: Fetch with Timeout (Manual)
const controller = new AbortController();
const signal = controller.signal;
setTimeout(() => {
controller.abort(); // Abort fetch after 2 seconds
}, 2000);
fetch("https://jsonplaceholder.typicode.com/posts", { signal })
.then((res) => res.json())
.then((data) => console.log("Data:", data))
.catch((err) => {
if (err.name === "AbortError") {
console.error("Fetch aborted!");
} else {
console.error("Error:", err);
}
});
We handle the “AbortError” in .catch().