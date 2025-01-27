// Exercise 32: Browser Timeout to Avoid “Page Unresponsive”

let array = Array.from({ length: 1e6 }, (_, i) => i);
function processChunk(startIndex) {
let endIndex = Math.min(startIndex + 10000, array.length);
for (let i = startIndex; i < endIndex; i++) {
}
if (endIndex < array.length) {
setTimeout(() => processChunk(endIndex), 0);
}
}
processChunk(0);
console.log("Chunked processing started, UI not blocked");