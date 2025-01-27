// Exercise 47: Callback to Show Sorting Data

function getDataAndSort(callback) {
setTimeout(() => {
let data = [5, 3, 8, 1];
callback(data);
}, 400);
}
getDataAndSort((arr) => {
console.log("Received array:", arr);
console.log("Sorted:", arr.sort((a, b) => a - b));
});