// Exercise 37: Basic Callback Pattern

function fetchData(callback) {
setTimeout(() => {
callback("Data from server");
}, 1000);
}
fetchData((result) => {
console.log("Callback received:", result);
});