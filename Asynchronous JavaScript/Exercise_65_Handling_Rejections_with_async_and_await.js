// Exercise 65: Handling Rejections with async and await

function alwaysReject() {
return new Promise((resolve, reject) => {
reject("Promise always rejects");
});
}
async function run() {
try {
let res = await alwaysReject();
console.log("This will not run:", res);
} catch (error) {
console.log("Caught in try/catch:", error);
}
}
run();
await alwaysReject() throws an error, so we land in the catch block.