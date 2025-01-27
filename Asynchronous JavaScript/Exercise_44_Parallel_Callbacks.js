// Exercise 44: Parallel Callbacks

let results = {};
let completed = 0;
function fetchDataA(done) {
setTimeout(() => {
done("DataA");
}, 300);
}
function fetchDataB(done) {
setTimeout(() => {
done("DataB");
}, 200);
}
fetchDataA((res) => {
results.a = res;
completed++;
if (completed === 2) final();
});
fetchDataB((res) => {
results.b = res;
completed++;
if (completed === 2) final();
});
function final() {
console.log("Both done, results:", results);
}
We keep track of how many tasks have finished. Once both are done, we call final().