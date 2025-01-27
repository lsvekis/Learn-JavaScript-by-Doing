// Exercise 11: Callback Delay Stacking

setTimeout(() => console.log("First callback"), 500);
setTimeout(() => {
let start = Date.now();
while (Date.now() - start < 2000) {}
console.log("Second callback after a 2s block");
}, 500);
setTimeout(() => console.log("Third callback"), 500);
The second callback has a busy loop. The third callback (also at 500ms) will only run after that loop finishes.