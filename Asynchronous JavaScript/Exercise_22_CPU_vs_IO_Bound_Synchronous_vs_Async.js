// Exercise 22: CPU vs. I/O Bound Synchronous vs. Async

function cpuHeavy() {
let sum = 0;
for (let i = 0; i < 1e7; i++) sum++;
return sum;
}
// I/O-bound example (using setTimeout simulation)
function ioWait(callback) {
setTimeout(() => callback("I/O done"), 2000);
}
console.log("CPU bound result:", cpuHeavy());
ioWait((res) => console.log(res));