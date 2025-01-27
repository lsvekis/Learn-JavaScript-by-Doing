// Exercise 28: UI Updates in the Middle of an Async Operation

<div id="status">Loading...</div>
setTimeout(() => {
document.getElementById("status").textContent = "Data loaded!";
}, 3000);