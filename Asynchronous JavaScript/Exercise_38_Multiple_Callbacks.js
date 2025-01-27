// Exercise 38: Multiple Callbacks

function loadResource(successCallback, errorCallback) {
let success = Math.random() > 0.5;
setTimeout(() => {
if (success) {
successCallback("Resource loaded");
} else {
errorCallback("Loading failed");
}
}, 500);
}
loadResource(
(msg) => console.log("Success:", msg),
(err) => console.log("Error:", err)
);