// Exercise 18: Observing UI Responsiveness (Browser Example)

Exercise 18: Observing UI Responsiveness (Browser Example)
// 1) Synchronous:
let start = Date.now();
while (Date.now() - start < 5000) { /* freeze the page for 5s */ }
alert("Done blocking");
// 2) Asynchronous version using setTimeout to chunk tasks