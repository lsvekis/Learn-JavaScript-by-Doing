// Exercise 45: Using an Array for Parallel Task Completion

function asyncTask(idx, delay, callback) {
setTimeout(() => {
callback(`Result from task ${idx}`);
}, delay);
}
let tasks = [100, 300, 200];
let results = [];
let doneCount = 0;
tasks.forEach((time, i) => {
asyncTask(i, time, (res) => {
results[i] = res;
doneCount++;
if (doneCount === tasks.length) console.log("All done:", results);
});
});