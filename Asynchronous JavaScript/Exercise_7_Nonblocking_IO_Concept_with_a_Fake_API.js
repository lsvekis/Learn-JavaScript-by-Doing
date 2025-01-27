// Exercise 7: Non-blocking I/O Concept with a Fake API

function fakeFetch(callback) {
setTimeout(() => {
callback("Fake data loaded");
}, 2000);
}
console.log("Requesting data...");
fakeFetch((data) => {
console.log("Callback got:", data);
});
console.log("Other code can run now");