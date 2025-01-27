// Exercise 24: Logging Execution Time to Compare

console.time("syncTask");
let sum = 0;
for (let i = 0; i < 1e6; i++) sum++;
console.timeEnd("syncTask");
console.time("asyncTask");
setTimeout(() => {
console.timeEnd("asyncTask");
}, 100);