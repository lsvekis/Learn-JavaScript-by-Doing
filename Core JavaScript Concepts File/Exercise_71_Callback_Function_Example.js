// Exercise 71: Callback Function Example

function doTask(taskName, callback) {
console.log("Doing:", taskName);
callback();
}
doTask("Download file", function() {
console.log("Download complete!");
});