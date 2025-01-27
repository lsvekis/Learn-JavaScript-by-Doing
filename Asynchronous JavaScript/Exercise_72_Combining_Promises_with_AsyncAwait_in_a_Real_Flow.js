// Exercise 72: Combining Promises with Async/Await in a Real Flow

function fetchUser(userId) {
return new Promise((resolve) => {
setTimeout(() => resolve({ id: userId, name: "User" + userId }), 300);
});
}
async function processUser(id) {
let user = await fetchUser(id);
console.log("Fetched user:", user);
return "Processed user " + user.name;
}
processUser(42).then((msg) => console.log(msg));