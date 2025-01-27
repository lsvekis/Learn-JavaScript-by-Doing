// Exercise 17: Non-Blocking Alternative

function nonBlockingFetchSim(callback) {
setTimeout(() => callback("Async data"), 2000);
}
console.log("Start fetch");
nonBlockingFetchSim((data) => console.log("Got:", data));
console.log("Fetching in background...");