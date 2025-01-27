// Exercise 100: Final Example – Complex Flow with Async/Await and Error Handling

async function finalFlow() {
try {
let [dataRes, configRes] = await Promise.all([
fetch("https://jsonplaceholder.typicode.com/posts/1"),
fetch("https://jsonplaceholder.typicode.com/users/1"),
]);
if (!dataRes.ok || !configRes.ok) {
throw new Error("One or both requests failed");
}
let [post, user] = await Promise.all([dataRes.json(), configRes.json()]);
console.log("Post data:", post);
console.log("User data:", user);
let combined = await combineAsync(post, user);
console.log("Combined:", combined);
} catch (err) {
console.error("Final flow error:", err);
} finally {
console.log("Flow ended (success or error).");
}
}
function combineAsync(post, user) {
return new Promise((resolve) =>
setTimeout(() => {
resolve({ ...post, user });
}, 300)
);
}
finalFlow();
