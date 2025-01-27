// Exercise 35: Database or Network Calls in Node

function getUserDataFromDB(userId, callback) {
setTimeout(() => {
callback({ id: userId, name: "Example" });
}, 200);
}
console.log("Requesting user data");
getUserDataFromDB(123, (user) => console.log("User fetched:", user));