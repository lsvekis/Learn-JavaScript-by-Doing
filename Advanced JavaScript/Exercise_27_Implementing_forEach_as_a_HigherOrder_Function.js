// Exercise 27: Implementing forEach as a Higher-Order Function

function myForEach(arr, callback) {
for (let i = 0; i < arr.length; i++) {
callback(arr[i], i, arr);
}
}
myForEach([10, 20, 30], (val, idx) => {
console.log("Index:", idx, "Value:", val);
});