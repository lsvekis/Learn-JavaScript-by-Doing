// Exercise 92: Streaming a Large Response

What You’ll Learn: The concept of reading fetch’s body as a stream (browser environment).
Learning Objectives:
Typically advanced usage; we show a conceptual approach.
fetch("https://jsonplaceholder.typicode.com/photos")
.then((res) => {
const reader = res.body.getReader();
return reader.read();
})
.then(function processChunk({ done, value }) {
if (done) {
console.log("Stream complete");
return;
}
console.log("Received chunk of size:", value.length);
})
.catch((err) => console.error("Stream error:", err));
res.body.getReader() provides a readable stream. We can read chunks.