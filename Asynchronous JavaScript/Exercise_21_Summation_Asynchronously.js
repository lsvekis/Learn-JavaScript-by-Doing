// Exercise 21: Summation Asynchronously

function asyncSum(a, b, callback) {
setTimeout(() => {
let result = a + b;
callback(result);
}, 500);
}
console.log("Start async sum");
asyncSum(5, 10, (res) => console.log("Async sum result:", res));
console.log("End of script");