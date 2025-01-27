// Exercise 95: Uploading Form Data with fetch

Show how to send form data (multipart/form-data).
<form id="uploadForm">
<input type="file" name="fileInput" />
<button type="submit">Upload</button>
document.getElementById("uploadForm").addEventListener("submit", async (e) => {
e.preventDefault();
let formData = new FormData(e.target);
try {
let res = await fetch("/upload", {
});
let result = await res.text();
console.log("Server response:", result);
} catch (err) {
console.error("Upload failed:", err);
}
});
fetch automatically sets the correct Content-Type (multipart/form-data) for file uploads.