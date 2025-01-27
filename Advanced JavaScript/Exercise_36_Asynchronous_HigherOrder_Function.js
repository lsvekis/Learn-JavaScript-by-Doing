// Exercise 36: Asynchronous Higher-Order Function

function asyncProcess(data, callback) {
setTimeout(() => {
callback("Processed: " + data);
}, 300);
}
asyncProcess("myData", (result) => {
console.log(result);
});