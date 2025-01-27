// Exercise 25: Simulating UI Freeze vs. Non-Freeze

// 1) Freeze scenario:
function freezeUI() {
let start = Date.now();
while (Date.now() - start < 3000) {}
alert("UI was blocked for 3s");
}
// 2) Non-blocking approach might be setTimeout-based:
function delayedAlert() {
setTimeout(() => alert("No blocking!"), 3000);
}