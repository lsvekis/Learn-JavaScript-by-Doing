// Exercise 97: Converting Callback-based API to a Promise

function oldApi(param, callback) {
setTimeout(() => {
callback(null, `Data for ${param}`);
}, 500);
}
function oldApiPromise(param) {
return new Promise((resolve, reject) => {
oldApi(param, (err, data) => {
if (err) reject(err);
else resolve(data);
});
});
}
oldApiPromise("Test").then((result) => console.log("Promisified result:", result));